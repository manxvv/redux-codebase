import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  user: null,
  token: null,
  authenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setAuth: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    setAuthenticated: (state, action) => {
      state.authenticated = action.payload;
    },
    removeAuth: (state) => {
      state.user = null;
      state.token = null;
      state.authenticated = false;
    },
  },
});

export const { setLoading, setAuth, setAuthenticated, removeAuth } = authSlice.actions;
export default authSlice.reducer;
