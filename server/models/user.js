import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    id: {
        type: String,
        unique: true
    },
    password: String,
    nick: {
        type: String,
        unique: true
    },
    regDt: String
    
});

const user = mongoose.model('user', userSchema);
user.createIndexes();

export default user;