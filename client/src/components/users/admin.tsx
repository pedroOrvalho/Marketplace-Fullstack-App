import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
// import Loading from "../loading/Loading";
// import ProductItem from "./ProductItem";
import { fetchUserData } from "../../redux/thunk/users";
import { Box } from "@mui/material";

import UserItem from "./useritem";

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
    return <p>loading</p>;
  }
  if (searchUsers.length > 0) {
    userList = searchUsers;
  }

  return (
      <Box className="UserList" >
      {userList.map((item) => (
        <UserItem key={item._id} item={item} />
      ))}
    </Box>
  );
}
