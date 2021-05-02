import jwt from 'jsonwebtoken';
import config from '../config.js';


// want's to join chat room
// click chat room button => auth middleware (confirm or deny) next => like controller...

const auth = async (req, res, next) => {
    try {
        const token = req.headers.Authorization.split(" ")[1];
        const isCustomAuth = token.length < 500; // or google auth
        let decodedData;

        if(token && isCustomAuth) {
            decodedData = jwt.verify(token, config.secret);
            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);
            req.userId = decodedData?.sub; // google's name for a specific id that differentiates every single google user
        }

        next();
    } catch (error) {
        // console.log(error);
        console.log('auth failed');
        next();
    }
}

export default auth;