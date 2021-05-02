import express from 'express';
import { createRoom, getRooms, getRoom } from '../controllers/chatRoom.js';
import auth from '../middleware/auth.js';


const router = express.Router();

router.get('/room', getRooms);
router.put('/room', createRoom);
router.get('/room/:roomNo', auth, getRoom);

export default router;