import express from "express";
const router = express.Router();

import { taskData } from "../src/utils.js";

router.get("/api/taskData", (req, res) => {
    res.json(taskData);
});

router.get ("/api/taskData/:id", (req, res) => {
    const taskId = Number(req.params.id);
    const task = taskData.find(task => task.id === taskId);
    if (!task) {
        return res.status(404).json({ error: "Task not found" });
    }
    res.json(task);
});
export default router;