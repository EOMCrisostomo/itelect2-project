import express from "express";
import { fetchSampleUsers } from "../src/api.js";
import { taskData } from "../src/utils.js";
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
export default router;