import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import chatRoomRoutes from './routes/chatRoom.js';
import userRoutes from './routes/user.js';
import config from './config.js';

/* express module */
const app = express();

/* setting up a body-parser for sending request */
/* json maximum 20mb, no string limits */
app.use(bodyParser.json({limit: "20mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended: true}));

app.use(cors());

/* add router. every request starts with /chat will go to chatRoutes */
app.use('/chat', chatRoomRoutes);
app.use('/user', userRoutes);

/* mongodb */
const CONNECTION_URL = config.mongodbUri;

const PORT = process.env.PORT || 5000;

/* mongoose connection */
mongoose.connect(CONNECTION_URL, {
    /* Waning, Errors 무시 */
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    /* connection success */
    () => app.listen(
        PORT, () => console.log(`Connection is established and running on port : ${PORT}`)
)).catch(
    /* connection fail */
    (err) => console.log(err.messages)
);

/* mongoose warning ignore */
mongoose.set('useFindAndModify', false);