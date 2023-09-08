import {GET_LOGIN_SUCCESS} from './actionTypes'
const initialState = {
    isLogin: false
}

const reducer = (state = initialState, {type,payload})

switch(type){
    case GET_LOGIN_SUCCESS: {
        return {
            isLogin:payload
        }
    }
    default:{
        return state
    }
}

export {reducer}