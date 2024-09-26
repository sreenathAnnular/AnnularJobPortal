import { configureStore } from '@reduxjs/toolkit'; 

import signinreducer from './redux/signinSlice'; 
import educationReducer from './redux/educationSlice'

export const store = configureStore({
    reducer:{
         signin:signinreducer,
         education:educationReducer,

    }
})

export default store;