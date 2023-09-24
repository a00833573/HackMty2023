import { createSlice } from "@reduxjs/toolkit"

const userAuthFromLocal = () => {
    const isAuth = localStorage.getItem('isAuth')
    if(isAuth && JSON.parse(isAuth) === true) return true;

    return false;
}

const userAdminFromLocal = () => {
    const isAdmin = localStorage.getItem('isAdmin')
    if(isAdmin && JSON.parse(isAdmin) === true) return true;
    
    return false;
}

const initialState = {
    isAuth: userAuthFromLocal(),
    isAdmin : userAdminFromLocal(),
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authenticateUser: (state) => {
            state.isAuth = true
        },
        unauthenticateUser: (state) => {
            state.isAuth = false
        },
        authenticateAdmin: (state) => {
            state.isAdmin = true
        },
        unauthenticateAdmin: (state) => {
            state.isAdmin = false
        },
    },
})

export const {authenticateUser, unauthenticateUser, authenticateAdmin, unauthenticateAdmin} = authSlice.actions
export default authSlice.reducer