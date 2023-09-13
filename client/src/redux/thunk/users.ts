import { AppDispatch } from "../store";
import { getAllUsersData } from "../slices/users";


export function fetchUserData() {
  const userUrl = "";
  return async (dispatch: AppDispatch) => {
    const response = await fetch(userUrl);
    const UserData = await response.json();
    dispatch(getAllUsersData(UserData));
  };
}
