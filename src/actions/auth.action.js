import { authConstant } from "./constants"
import axios from "../helpers/axios"

export const login = (user) => {
    return async (dispatch) => {
      dispatch({ type: authConstant.LOGIN_REQUEST });
      const res = await axios.post(`/signin`, {
        ...user,
      });
  
      if (res.status === 200) {
        const { token, user } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        dispatch({
          type: authConstant.LOGIN_SUCCESS,
          payload: {
            token,
            user,
          },
        });
      } else {
        if (res.status === 400) {
          dispatch({
            type: authConstant.LOGIN_FAILURE,
            payload: { error: res.data.error },
          });
        }
      }
    };
  }; 



export  const isUserLoggedIn = () =>{
    return async dispatch => {
        const token=localStorage.getItem("token");
        if(token){
            const user=JSON.parse(localStorage.getItem("user"))
            dispatch({
                type: authConstant.LOGIN_SUCCESS,
                payload: {token,user}
            })
        }
        else{
            dispatch({
                type: authConstant.LOGIN_FAILURE,
                payload: {error: 'Failed to Load'}
            }) 
        }
    }
}

export const signOut=()=>{
    return async dispatch =>{
        dispatch({  type:authConstant.LOGOUT_REQUEST})
        localStorage.clear()
        dispatch({ type:authConstant.LOGOUT_SUCCESS,})
        // const res=await axios.post(`/admin/signout`)
        // if(res.status==200){
          
        // }
        // else{
        //     dispatch({
        //         type:authConstant.LOGOUT_FAILURE,
        //         payload: {error: res.data.error}
        //     })
        // }
       
    }
}