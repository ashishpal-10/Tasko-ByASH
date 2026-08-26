import Task from "../models/task.model.js";

export const createTask = async(req,res)=>{
 
    try {
        const task = await Task.create({...req.body,user:req.userId,});

        res.status(201).json({
            message:"task created successfully",
            task,
        })
        
    } catch (error) {
        res.status(500).json({
            message:"Failed to create Task",
            error:error.message
        });
    }


}


export const getTask = async(req,res)=>{

    try {

        const tasks = (await Task.find().sort({createdAt:-1}));

        res.status(200).json({
            message:"Tasks fetched Successfully",
            tasks,
        })
        
    } catch (error) {
        res.status(500).json({
            error:error.message,
            message:"Failed to fetch Tasks"
        });
    }
}

export const getTaskById = async(req,res)=>{
    try {

        const {id} = req.params;

        const task = await Task.findById(id);

        if(!task){
            return req.status(400).json({
                message:"Tasks Not Found",
            })
        }

        res.status(200).json({
            message:"Tasks Fetched Successfully",
            task,
        })
        
    } catch (error) {
                res.status(500).json({
            message:"Internal Server error",
            error:error.message,
        })
    }
}

export const deleteTask = async(req,res)=>{
    try {
        const task = await Task.findById(req.params.id);

        if(!task){
            return res.status(403).json({
                message:"task not found"
            })
        }

         if (task.user.toString() !== req.userId.toString()) {
      return res.status(403).json({
        message: "You are not authorized to delete this task",
      });
    }
        // await Task.findByIdAndDelete(req.params.id);

        const deletedTask = await Task.findByIdAndDelete(req.params.id);

        if(!deletedTask){
            return res.status(404).json({
                message:"task not found"
            });
        }


        res.status(200).json({
            message:"Task Deleted Successfully",
            Task:deleteTask,
        });

        
    } catch (error) {
         res.status(500).json({
            error:error.message,
            message:"Failed to fetch Tasks"
        });
    }
}

export const updateTask = async(req,res)=>{
    try {
        const task = await Task.findById(req.params.id);

        if(!task){
            return res.status(403).json({
                message:"task not found"
            });
        }

        if(task.user.toString() !== task.userId.toString()){
            return res.status(403).json({
                message:"you are not Authorized for update this task"
            })
        }


        const updated = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
            new:true,
            runValidators:true,
        });

        if(!updated){
            return res.status(400).json({
                message:"Task Not Found",
            });
        }

        res.status(200).json({
            message:"Task Updated Successfully",
            task:updated,
        });
        
    } catch (error) {
        res.status(500).json({
            message:"Internal Server error",
            error:error.message,
        })
    }
}



