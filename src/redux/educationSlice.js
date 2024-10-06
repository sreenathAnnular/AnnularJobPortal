import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
<<<<<<< HEAD
import axios from 'axios';

// Define the initial state for the education slice
const initialState = {
  educationData: [],
  loading: false,
  error: null,
};

// Function to get the token from localStorage
const getToken = () => {
  return localStorage.getItem('jwt');
};

// Async thunk for saving education data
export const saveEducationData = createAsyncThunk(
  'education/saveEducationData',
  async (educationEntries, { rejectWithValue }) => {
    try {
      const token = getToken(); // Retrieve the token from localStorage
      const response = await axios.post(
        'http://13.202.217.89:8080/profile/updateEducation',
        educationEntries,
        {
          headers: {
            'Authorization': `Bearer ${token}`, // Set the authorization header
            'Content-Type': 'application/json', // Set content type to JSON
          },
        }
      );
      return response.data; // Return the response data
    } catch (error) {
      return rejectWithValue(error.response.data); // Handle error
    }
  }
);

// Create the education slice
=======

// Initial state
const initialState = {
  educationData: {
    college: '',
    course: '',
    startYear: '',
    endYear: '',
    grade: '',
    location: '',
  },
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Create an asynchronous thunk for saving education data (if needed)
export const saveEducationData = createAsyncThunk(
  'education/saveEducationData',
  async (educationData) => {
    // You can replace this with an actual API call
    // Example: return await axios.post('/api/education', educationData);
    return educationData; // For demonstration purposes
  }
);

// Create the slice
>>>>>>> origin/master
const educationSlice = createSlice({
  name: 'education',
  initialState,
  reducers: {
<<<<<<< HEAD
    // Additional reducers can go here
=======
    setEducationData: (state, action) => {
      state.educationData = action.payload;
    },
    clearEducationData: (state) => {
      state.educationData = initialState.educationData;
    },
>>>>>>> origin/master
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveEducationData.pending, (state) => {
<<<<<<< HEAD
        state.loading = true;
        state.error = null; // Clear previous errors
      })
      .addCase(saveEducationData.fulfilled, (state, action) => {
        state.loading = false;
        state.educationData = action.payload; // Update the education data with the response
      })
      .addCase(saveEducationData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Set the error if the API call fails
=======
        state.status = 'loading';
      })
      .addCase(saveEducationData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // You can also handle success logic here, e.g., updating the state or logging
        console.log('Saved education data:', action.payload);
      })
      .addCase(saveEducationData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
>>>>>>> origin/master
      });
  },
});

<<<<<<< HEAD
// Export actions and reducer
=======
// Export actions
export const { setEducationData, clearEducationData } = educationSlice.actions;

// Export the reducer
>>>>>>> origin/master
export default educationSlice.reducer;
