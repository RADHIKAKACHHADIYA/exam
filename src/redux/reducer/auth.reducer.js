import * as ActionTypes from '../ActionType';

const initialValue = {
    users: [],
}

export const signupReducer = (state = initialValue, action) => {

    switch (action.type) {
        case ActionTypes.AUTH_SINGUP :
            return {
                ...state,
                users: action.payload
            }
        case ActionTypes.AUTH_LOGIN:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state;
    }
}