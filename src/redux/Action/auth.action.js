
import * as ActionTypes from '../ActionType';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword} from "firebase/auth";

export const signUpUser = (values) => (dispatch) => {
  console.log(values.email, values.password);
  try {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;

        sendEmailVerification(user)
          .then(() => {
            console.log("verification mail send on your email address")
          });
        dispatch({ type: ActionTypes.AUTH_SINGUP, payload: values.email })
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode + errorMessage)
      });
  } catch (e) {
    console.log(e)
  }
}


export const loginUser = (values) => (dispatch) => {
  signInWithEmailAndPassword(auth, values.email, values.password)
    .then((userCredential) => {
      const user = userCredential.user;

      if (user.emailVerified) {
        console.log("user login successfully")
        sessionStorage.getItem("user", user.uid)
        console.log(user.uid , "><>")
        dispatch({ type: ActionTypes. AUTH_LOGIN , payload: user.uid })
        
      } else {
        console.log("please verify your email")

      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode)
      console.log(errorMessage)

      if (errorCode === "auth/user-not-found") {
        console.log("User does not exist")
       
      } else if (errorCode === "auth/wrong-password") {
        console.log("Invalid email or password")
       
      }
    });

}




