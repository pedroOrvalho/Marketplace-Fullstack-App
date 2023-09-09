import { AppDispatch } from "../store";
import { UserActions } from "../slices/users";


export function fetchUserData() {
  const userUrl = "";
  return async (dispatch: AppDispatch) => {
    const response = await fetch(userUrl);
    const UserData = await response.json();
    dispatch(UserActions.getUserData(UserData));
  };
}
