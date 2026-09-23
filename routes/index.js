import express from "express";
import db from "../models/index.cjs";
import verifyToken from "../middleware/verifyToken.js";
import requireRole from "../middleware/requireRole.js";
const { User, Task } = db;
const router = express.Router();


router.get("/tasks", async (req, res) => {
    try {
        const tasks = await Task.findAll({ include: User });
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get ("/tasks/:id", async (req, res) => {
    try {
        const taskId = Number(req.params.id);
        const task = await Task.findByPk(taskId, {include: User});
        if (!task) {
            return res.status(404).json({ error: `Task ID: ${taskId} not found` });
        }
        res.json(task);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get("/users", async (req, res) => {
    try {
        await User.findAll({ include: Task }).then(users => {
            res.json(users);
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post("/tasks", verifyToken, async (req, res) => {
    try {
        let newTaskId = await Task.max('id');
        if (!newTaskId) {
            newTaskId = 0;
        }
        const newTask = await Task.create({ ...req.body, id: newTaskId + 1 });
        res.status(201).json(newTask);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.put("/tasks/:id", verifyToken, async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (!task) {
            return res.status(404).json({ error: `Task ID: ${req.params.id} not found` });
        }
        await task.update(req.body);
        res.json(task);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.delete("/tasks/:id", verifyToken, requireRole("admin"), async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (!task) {
            return res.status(404).json({ error: `Task ID: ${req.params.id} not found` });
        }
        await task.destroy();
        res.status(200).send();
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

export default router;