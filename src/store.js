import { configureStore } from '@reduxjs/toolkit'; 

import signinreducer from './redux/signinSlice'; 
import educationReducer from './redux/educationSlice'
<<<<<<< HEAD
import registerReducer from './redux/registerFormSlice'
import scheduleReducer from './redux/scheduleSlice'
import meetingReducer from './redux/meetingSlice'
import userProfileSlice from './redux/userProfileSlice';
import userInfoReducer from './redux/personalInfoSlice'
import skillsReducer from './redux/skillsSlice'
import toolsReducer from './redux/toolsSlice'

=======
>>>>>>> origin/master

export const store = configureStore({
    reducer:{
         signin:signinreducer,
         education:educationReducer,
<<<<<<< HEAD
         registerForm:registerReducer,
         schedule:scheduleReducer,
         meeting:meetingReducer,
         userProfile:userProfileSlice,
         userInfo:userInfoReducer,
         skills:skillsReducer,
         tools:toolsReducer,
         

=======
>>>>>>> origin/master

    }
})

export default store;