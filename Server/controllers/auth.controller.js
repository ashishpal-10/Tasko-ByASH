import bcrypt from "bcryptjs"

import User from "../models/user.model.js"


export const signup = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        // check User Already Exist or not
        if (existingUser) {
            res.status(400).json({
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