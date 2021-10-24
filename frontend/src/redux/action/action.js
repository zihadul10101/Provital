import { authSlice } from "../slice/authSlice";

const { actions: slice } = authSlice;

export const googleSignUpAction = (authdetails) => (dispatch) => {
    dispatch(slice.googleAuth(authdetails))
}