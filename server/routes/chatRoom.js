import express from 'express';
import { createRoom, getRooms, getRoom } from '../controllers/chatRoom.js';

const router = express.Router();

router.get('/room', getRooms);
router.put('/room', createRoom);
router.get('/room/:roomNo', getRoom);

export default router;