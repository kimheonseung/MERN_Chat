import ChatRoomData from '../models/chatRoom.js';

export const getRooms = async (req, res) => {
    try {
        const allRooms = await ChatRoomData.find();
        res.status(200).json(allRooms);
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

export const getRoom = async (req, res) => {
    try {
        console.log('getRoom userId ', req.userId);

        if(!req.userId) return res.json({message: "Unauthenticated"});

        let roomNumber = req.params.roomNo;
        console.log('getRoom - ', roomNumber);
        const room = await ChatRoomData.findOne({roomNo: roomNumber});
        res.status(200).json(room);
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

export const createRoom = async (req, res) => {
    console.log('createRoom', req);
    console.log('req.body', req.body);
    const room = req.body;
    const newRoom = new ChatRoomData(room);

    try {
        await newRoom.save();
        req.status(201).json(newRoom);
    } catch (error) {
        res.status(409).json({
            message: error.message
        });
    }
}