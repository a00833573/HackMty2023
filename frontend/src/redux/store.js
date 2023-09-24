import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/auth_slice';

const store = configureStore({
    reducer: {
        auth: authSlice,
    },
})

export default store;