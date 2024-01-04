import { createSlice } from '@reduxjs/toolkit'
import { registerUser } from './authActions'

const initialState = {
  loading: false,
  userInfo: null,
  userToken: null,
  error: null,
  success: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // register user
    builder
        .addCase(registerUser.pending, (state) => {
        state.loading = true
        state.error = null
        })
        .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false
        state.success = true // registration successful
        state.userInfo = action.payload
        })
        .addCase(registerUser.rejected, (state,action) => {
        state.loading = false
        state.error = action.payload
        })
  },
})
export default authSlice.reducer