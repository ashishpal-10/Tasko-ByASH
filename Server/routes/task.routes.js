import express from "express"

import { createTask ,deleteTask,getTask, getTaskById, updateTask } from "../controllers/task.controller.js";
import { checkAuth } from "../middlewares/auth.middlewares.js";

const router = express.Router();

router.post("/",checkAuth,createTask);

router.get("/",checkAuth,getTask);

router.get("/:id",checkAuth,getTaskById);

router.delete("/delete/:id",checkAuth,deleteTask);

router.put("/:id",checkAuth,updateTask);

export default router;


