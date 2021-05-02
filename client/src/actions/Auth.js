import { AUTH } from '../constants/ActionTypes.js';
import * as api from '../api/index.js';

// component -> dispatch -> dispatch action (actions -> api) -> here
export const signIn = (formData, history) => async (dispatch) => {
    try {
        // log in the user...
        const { data } = await api.signIn(formData);
        console.log('signIn action result ', data);
        dispatch({type: AUTH, data});
        document.location.href = "/";
    } catch (error) {
        console.log(error);
    }
}

export const signUp = (formData, history) => async (dispatch) => {
    try {
        // sign up the user...
        const { data } = await api.signUp(formData);

        dispatch({type: AUTH, data});
        document.location.href = "/";
    } catch (error) {
        console.log(error);
    }
}