import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: "user",
    initialState:{
        user: null
    },
    reducers:{
       User_login_state: (state,action) =>{
        state.user = action.payload
       },
       user_logout_state: (state) =>{
        state.user = null
       }
    }
})


export const {User_login_state,user_logout_state} = userSlice.actions


export default userSlice.reducer