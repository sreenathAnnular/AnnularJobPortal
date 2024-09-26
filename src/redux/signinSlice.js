import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const signIn = createAsyncThunk('signin/signIn', async (credentials) => {
    console.log("email",credentials);
  const response = await axios.post('https://703c7f39-f17e-42bb-83a6-e5b7fbc6048e.mock.pstmn.io/user/login', {
    email: credentials.email,
    password: credentials.password,

   
  });
  return response.data;
});

const signinSlice = createSlice({
  name: 'signin',
  initialState: {
    user: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default signinSlice.reducer;