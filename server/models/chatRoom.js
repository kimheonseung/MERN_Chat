import mongoose from 'mongoose';

const chatRoomSchema = mongoose.Schema({
    roomNo: Number,
    roomName: String,
    createDt: String,
    password: String,
    topic: String
});

const chatRoom = mongoose.model('chatRoom', chatRoomSchema);

export default chatRoom;