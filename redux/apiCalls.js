import axios from "axios";
import { loginFailure, loginStart, loginSuccess, registerFailure, registerStart, registerSuccess } from "./authRedux"

export const login = async(dispatch , user , loginApi)=>{
    dispatch(loginStart());
    try {
        const res = await axios.post(loginApi , user);
        console.log(res.data);
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFailure())
    }
};

export const register = async(dispatch , user , registerApi)=>{
    dispatch(registerStart());
    try {
        const res = await axios.post(registerApi , user);
        console.log(res.data);
        dispatch(registerSuccess(res.data));
    } catch (error) {
        dispatch(registerFailure())
    }
};