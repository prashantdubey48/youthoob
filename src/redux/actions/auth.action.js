import firebase from "firebase/app";
import { auth, provider } from "../../firebase";
import {
  LOAD_PROFILE,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT
} from "../actionType";

export const login = () => async (dispatch) => {
  dispatch({
    type: LOGIN_REQUEST,
  });
  auth
    .signInWithPopup(provider)
    .then((result) => {
      console.log("result===>", result);
      const accessToken = result.credential.accessToken;

      //// adding scope in project
      provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl')

      const profile = {
        name: result.additionalUserInfo.profile.name,
        photoUrl: result.additionalUserInfo.profile.picture,
      };


      sessionStorage.setItem('ytc-access-token', accessToken)
      sessionStorage.setItem('ytc-user', JSON.stringify(profile))

      dispatch({
        type: LOGIN_SUCCESS,
        payload: accessToken,
        loading: false,
      });

      dispatch({
        type: LOAD_PROFILE,
        payload: profile,
      });
    })
    .catch((error) => {
      alert(error.message);
      dispatch({
        type: LOGIN_FAIL,
        payload: error.message,
        loading: false,
      });
    });
};


export const log_out = () => async dispatch => {
    await auth.signOut()
    dispatch({
       type: LOG_OUT,
    })
 
    sessionStorage.removeItem('ytc-access-token')
    sessionStorage.removeItem('ytc-user')
 }
