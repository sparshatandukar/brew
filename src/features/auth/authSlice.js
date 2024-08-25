import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: !!localStorage.getItem('token'), // Check if there's a token in localStorage
  userRole: localStorage.getItem('userRole'), // Retrieve user role from localStorage
  token: localStorage.getItem('token')
};

 
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.userRole = action.payload.userRole;
      state.token = action.payload.token;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.userRole = null;
      state.token = null;
      localStorage.removeItem('token');
    },
    setToken(state, action) {
      state.token = action.payload.token;
    },
  },
});

export const { login, logout, setToken } = authSlice.actions;
export default authSlice.reducer;