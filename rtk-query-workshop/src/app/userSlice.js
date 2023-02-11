import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setUser: (state, action) => {
      console.log("setUser");
      state = action.payload;
    },
  },
});
export const { setUser } = userSlice.actions;
