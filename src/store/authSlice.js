import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authorized: false,
  userData: null,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState: initialState,
  reducers: {
    reduxLogin: (state, action) => {
      (state.authorized = true), (state.userData = action.payload.userData);
    },
    reduxLogout: (state) => {
      (state.authorized = false), (state.userData = null);
    },
  },
});

export default authSlice.reducer;

export const { reduxLogin, reduxLogout } = authSlice.actions;
