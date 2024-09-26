import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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
const educationSlice = createSlice({
  name: 'education',
  initialState,
  reducers: {
    setEducationData: (state, action) => {
      state.educationData = action.payload;
    },
    clearEducationData: (state) => {
      state.educationData = initialState.educationData;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveEducationData.pending, (state) => {
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
      });
  },
});

// Export actions
export const { setEducationData, clearEducationData } = educationSlice.actions;

// Export the reducer
export default educationSlice.reducer;
