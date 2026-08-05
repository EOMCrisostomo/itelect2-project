import express from "express";
import { fetchSampleUsers } from "../src/api.js";
import { taskData, validateTask, mergeTaskUpdate } from "../src/utils.js";
const router = express.Router();

router.get("/tasks", (req, res) => {
    res.json(taskData);
});
let usersCache = [];
    (async () => {
        usersCache = await fetchSampleUsers();
    })();

router.get ("/tasks/:id", (req, res) => {
    const taskId = Number(req.params.id);
    const task = taskData.find(task => task.id === taskId);
    if (!task) {
        return res.status(404).json({ error: `Task ID: ${taskId} not found` });
    }
    res.json(task);
});


router.get("/users", (req, res) => {
    res.json(usersCache);
});
let newTaskId = 0;
router.post("/tasks", (req, res) => {
    newTaskId = taskData.length > 0 ? Math.max(...taskData.map(task => task.id)) + 1 : 1;
    const newTask = { id: newTaskId++, completed: false, ...req.body };
    if (!validateTask(newTask)) {
        return res.status(400).json({ error: "Invalid task data" });
    }
    taskData.push(newTask);
    res.status(201).json(newTask);
});

router.put("/tasks/:id", (req, res) => {
    const taskId = Number(req.params.id);
    const taskIndex = taskData.findIndex(task => task.id === taskId);
    if (taskIndex === -1) {
        return res.status(404).json({ error: `Task ID: ${taskId} not found` });
    }
    const updatedTask = mergeTaskUpdate(taskData[taskIndex], req.body);
    if (!validateTask(updatedTask)) {
        return res.status(400).json({ error: "Invalid task data" });
    }
    taskData[taskIndex] = updatedTask;
    res.json(updatedTask);
});

router.delete("/tasks/:id", (req, res) => {
    const taskId = Number(req.params.id);
    const taskIndex = taskData.findIndex(task => task.id === taskId);
    if (taskIndex === -1) {
        return res.status(404).json({ error: `Task ID: ${taskId} not found` });
    }
    taskData.splice(taskIndex, 1);
    res.status(200).send();
});

export default router;