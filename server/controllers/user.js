import UserData from '../models/user.js';
import Moment from 'moment';

export const getUsers = async (req, res) => {
    try {
        const allUsers = await UserData.find();
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

export const getUserById = async (req, res) => {
    try {
        let userIdParam = req.params.userId;
        console.log('getUserById - ', userIdParam);
        const user = await UserData.findOne({id: userIdParam});
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

export const getUserByNick = async (req, res) => {
    try {
        let userNickParam = req.params.userNick;
        console.log('getUserByNick - ', userNickParam);
        const user = await UserData.findOne({nick: userNickParam});
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

export const createUser = async (req, res) => {
    const user = req.body;
    const now = Moment().format('YYYY-MM-DD HH:mm:ss');
    user.regDt = now;
    const newUser = new UserData(user); 

    console.log('createUser - ', newUser);
    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        console.log(error);
        res.status(409).json({
            message: error.message
        });
    }
}

export const login = async (req, res) => {
    const user = req.body;
    console.log('login - ', user);
    let isMatch = false;
    let resultToken = "Invalid Token.";
    try {
        const selectedUser = await UserData.findOne({id: user.id});

        const selectedUserPw = selectedUser.password;
        const requestUserPw = user.password;

        if(selectedUserPw === requestUserPw)
            isMatch = true;

    } catch (error) {
        console.log(error);
        res.status(409).json({
            message: error.message
        });
    }

    res.status(200).json({
        match: isMatch,
        token: resultToken
    });
    
}