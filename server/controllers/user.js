import UserData from '../models/user.js';
import Moment from 'moment';

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import config from '../config.js';

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



export const signIn = async (req, res) => {
    const {email, password} = req.body;
    try {
        const existingUser = await User.findOne({email});

        if(!existingUser) return res.status(404).json({message: "User doesn't exist."});

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if(!isPasswordCorrect) return res.status(400).json({message: "Invalid credentials."});

        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, config.secret, {expiresIn: "1h"});

        res.status(200).json({result: existingUser, token});
    } catch (error) {
        res.status(500).json({message: "Something went wrong."});
        console.log(error);
    }
}

export const signUp = async (req, res) => {
    const {email, password, confirmPassword, name} = req.body;

    try {
        const existingUser = await User.findOne({email});
        
        if(existingUser) return res.status(400).json({message: "User already exists."});
        if(password !== confirmPassword) return res.status(400).json({message: "Password don't match."});

        const hashedPassword = await bcrypt.hash(password, 12);
        
        const result = await User.create({
            email,
            password: hashedPassword,
            name
        });
        
        const token = jwt.sign({email: result.email, id: result._id}, config.secret, {expiresIn: "1h"});
        
        res.status(200).json({result: result, token});
    } catch (error) {
        res.status(500).json({message: "Something went wrong."});
        console.log(error);
    }
}