import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import userReducer from '../features/user/userSlice'
import countryReducer from '../features/country/countrySlice'


export const store = configureStore({
    reducer: {
         auth: authReducer,
         user: userReducer,
         country: countryReducer,
    },
})