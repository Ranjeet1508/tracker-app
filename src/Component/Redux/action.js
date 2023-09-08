

import { GET_LOGIN_SUCCESS } from "./actionTypes";

export const getLogin = (payload) => {
    return{
        type: GET_LOGIN_SUCCESS,
        payload
    }
}