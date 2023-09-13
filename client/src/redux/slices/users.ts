import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../components/types/type";

type InitialState = {
  userLoginData: User | null;
  allUsers: User[];
  isLoading: boolean;
  searchUsers: User[];
};

const initialState: InitialState = {
  userLoginData: null,
  allUsers: [],
  isLoading: true,
  searchUsers: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUserLoginData: (state, action: PayloadAction<User>) => {
      state.userLoginData = action.payload;
    },
    getAllUsersData: (state, action: PayloadAction<User[]>) => {
      state.allUsers = action.payload;
      state.isLoading = false;
    },
    searchUsers: (state, action: PayloadAction<string>) => {
      const result = state.allUsers.filter((item) =>
        item.email.toLowerCase().includes(action.payload.toLowerCase())
      );
      state.searchUsers = result;
    },
  },
});

export const { getAllUsersData, getUserLoginData, searchUsers } =
  userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
