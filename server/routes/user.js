import express from 'express';
import { createUser, getUsers, getUserById, getUserByNick, login, signIn, signUp } from '../controllers/user.js';

const router = express.Router();

router.get('/', getUsers);
router.put('/', createUser);

router.get('/nick/:userNick', getUserByNick)

router.get('/id/:userId', getUserById);

router.post('/login', login)

router.post('/signin', signIn);
router.post('/signup', signUp);

export default router;