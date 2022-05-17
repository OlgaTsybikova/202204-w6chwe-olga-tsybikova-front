const { createSlice } = require("@reduxjs/toolkit");

const UserSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    logIn: (user, action) => ({ ...action.payload }),
  },
});

export default UserSlice;
