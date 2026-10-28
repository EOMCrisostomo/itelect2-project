import express from "express";
import verifyToken from "../middleware/verifyToken.js";
import requireRole from "../middleware/requireRole.js";
import * as taskController from '../controllers/taskController.js';
const router = express.Router();

router.get('/', taskController.getTasks);
router.post('/', verifyToken, taskController.createTask);
router.get('/:id', taskController.getTaskById);
router.put('/:id', verifyToken, taskController.updateTask);
router.delete('/:id', verifyToken, requireRole(`admin`), taskController.deleteTask);

export default router;