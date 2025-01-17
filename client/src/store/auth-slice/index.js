import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  use: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    // eslint-disable-next-line no-unused-vars
    setUser: (state, action) => {},
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
