import { User } from "@prisma/client";
import { createSlice } from "@reduxjs/toolkit";

interface UserSliceState {
  user: User | null;
}

const initialState: UserSliceState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {setUser } = userSlice.actions;

export default userSlice.reducer;
