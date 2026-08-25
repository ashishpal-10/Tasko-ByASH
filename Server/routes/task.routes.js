import express from "express"

import { createTask ,deleteTask,getTask, getTaskById, updateTask } from "../controllers/task.controller.js"

const router = express.Router();

router.post("/",createTask);

router.get("/",getTask);

router.get("/:id",getTaskById);

router.delete("/delete/:id",deleteTask);

router.put("/:id",updateTask);

export default router;


