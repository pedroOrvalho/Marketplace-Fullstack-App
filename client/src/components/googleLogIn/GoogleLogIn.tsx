import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GoogleLogin } from "@react-oauth/google";

import { getUserLoginData } from "../../redux/slices/users";

export type UserGoogle = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
};

export default function GoogleLogIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="googleLogin_container">
      <GoogleLogin
        // type="icon"
        size="large"
        shape="rectangular"
        onSuccess={async (credentialResponse) => {
          console.log(credentialResponse, "credential");
          const url = "http://localhost:7000/user/google-login";

          // we save the credential in a variable
          const credential = credentialResponse.credential;

          //we send from the frontend to the backend using post methot to the endpoint
          //we defined in the backend.
          let res = await axios.post(url, { id_token: credential });

          // if the comparison from the credential we send from the frontend with
          // the credential with google is correct we receive the user information
          // and save it to setUserGoogle state.
          if (res.status === 200) {
            //console.log(res, "response from BE");
            dispatch(getUserLoginData(res.data.userData));
            localStorage.setItem("userGoggleToken", res.data.token);
            localStorage.setItem("_id", res.data.userData._id);
            navigate("/");
          } else {
            alert("Login false");
          }
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
}
