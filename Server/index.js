import express from "express"
import dotenv from "dotenv";
import cors from "cors";

import ConnectDB from "./config/db.js";
import taskRoutes from "./routes/task.routes.js"

dotenv.config();
const app =express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000

app.get("/",(req,res)=>{
    res.send("Task Management API is running....")
});


app.use("/api/tasks",taskRoutes);


ConnectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on http://localhost:${PORT}`)
    })

}).catch((error)=>{
        console.error("Error",error.message)
})