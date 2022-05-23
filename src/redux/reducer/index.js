import { combineReducers } from "redux";
import { signupReducer } from "./auth.reducer";

const rootReducer = combineReducers ({
    authSignup :  signupReducer
})

export default rootReducer;