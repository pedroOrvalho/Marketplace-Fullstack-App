import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { fetchUserData } from "../../redux/thunk/users";

import { Box } from "@mui/material";

import UserItem from "./useritem";

import { Mockuser } from "../types/type";

export default function AdminUser() {
  const users = useSelector((state: RootState) => state.users.allUsers);
  const searchUsers = useSelector(
    (state: RootState) => state.users.searchUsers
  );

  const isLoading = useSelector((state: RootState) => state.users.isLoading);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  let userList = users;

  if (isLoading) {
    return <p>Loading user list....</p>;
  }
  if (searchUsers.length > 0) {
    userList = searchUsers;
  }

  
  
  const mockuser :Mockuser[]= [
    {
      _id: "43232",
      fname: "user1",
      lname: "user20",
      email: "user22",
      password: "password",
    },
    {
      _id:"hyt543",
      fname: "user3",
      lname: "user21",
      email: "user11",
      password: "password",
    },
    {
      _id: "4543re",
      fname: "user2",
      lname: "user22",
      email: "user33",
      password: "password",
    },
    {
      _id: "43tre",
      fname: "user0",
      lname: "user23",
      email: "user44",
      password: "password",
    },
  ];
   

  return (
    <Box className="UserList">
      {mockuser.map((user) => (
        <UserItem key={user._id} user={user} />
      ))}

      
    </Box>
  );
}
