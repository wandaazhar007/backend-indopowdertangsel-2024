import express from "express";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../middleware/RefreshToken.js";
import { getUserById, getUsers, login, logout, registerUser, deleteUserById, updateUser } from "../controllers/UserController.js";


const router = express.Router();

router.get('/api/user', getUsers);
router.get('/api/user/:id', getUserById);
router.delete('/api/user/:id', deleteUserById);
router.post('/api/user', registerUser);
router.patch('/api/user/:id', updateUser);
router.post('/api/login', login);
router.delete('/api/logout', logout);
router.get('/api/token', refreshToken);

export default router;