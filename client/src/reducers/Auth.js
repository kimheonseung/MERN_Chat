import { AUTH, LOGOUT } from '../constants/ActionTypes.js';

const AuthReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({...action?.data}));
            return {...state, authData: action?.data};
    
        default:
            return state;
    }
}

export default AuthReducer;