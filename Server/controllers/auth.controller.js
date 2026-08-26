import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import User from "../models/user.model.js"


export const signup = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        // check User Already Exist or not
        if (existingUser) {
            return res.status(400).json({
                message: "User Already Found!"
            });
        }

        // Hash Password
        const hashedPassword = await bcrypt.hash(password, 10);


        // create User
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        res.status(201).json({
            message:"User Register Successfully✅",
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
            },
        });




    } catch (error) {
        res.status(500).json({
            message:"SignUp Failed ❌",
            error:error.message,
        })
    }

}


export const login = async(req,res)=>{
     try {
        const {email,password} = req.body;

        // find user by email
        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({
                message:"Invalid Username or Password"
            });
        }

        // compare password with hashed password
        const ispasswordCorrect =await bcrypt.compare(password,user.password);

        if(!ispasswordCorrect){
            return res.status(400).json({
                message:"Invalid Username or Password"
            });
        }


        // generate token
        const token = jwt.sign({
            userId:user._id,
            userName:user.name,
        }, process.env.JWT_SECRET,{expiresIn:"5d"});

        res.status(200).json({
            message:"Login Successful",
            token,
            user:{
                id:user._id,
                name:user.name,
                email:user.email,
            }
        });


        
     } catch (error) {
        res.status(500).json({
            message:"Login Failed",
            error:error.message
        })
     }
}

