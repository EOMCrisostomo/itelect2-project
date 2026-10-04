import express from "express";
import verifyToken from "../middleware/verifyToken.js";
import * as userController from '../controllers/userController.js';
const router = express.Router();
router.get('/', verifyToken, userController.getUsers);

export default router;