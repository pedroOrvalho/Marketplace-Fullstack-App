import React, { useState } from "react";

import axios from "axios";

import { Box, Paper, TextField, Button } from "@mui/material";

export default function Signup() {

  const reg_endpoint = "http://localhost:7000/user/register";
  const login_endpoint ="http://localhost:7000/user/login"
  const [signupRespons, setSignupResponse] = useState("");
  const [togglelogin, setToggleLogin] = useState(true);
  const [togglesignup, setToggleSignup] = useState(false);

  const [userinfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  function getfName(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInfo({ ...userinfo, firstName: event.target.value });
  }
  function getlName(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInfo({ ...userinfo, lastName: event.target.value });
  }
  function getEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInfo({ ...userinfo, email: event.target.value });
  }
  function getPassword(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInfo({ ...userinfo, password: event.target.value });
  };

  function getLoginEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setLoginInfo({ ...loginInfo, email: event.target.value });
  }
  function getLoginPassword(event: React.ChangeEvent<HTMLInputElement>) {
    setLoginInfo({ ...loginInfo, password: event.target.value });
  }



  function signUpHandler() {
    axios
      .post(reg_endpoint, userinfo)
      .then((res) => setSignupResponse("success"))
      .catch((err) => console.log(err));
  }
  console.log(signupRespons);

  function signInHandler() {
    axios
      .post(login_endpoint, loginInfo)
      .then((res) => setSignupResponse("success"))
      .catch((err) => console.log(err));
  }
  console.log(signupRespons);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      <h1
        style={{
          color: "skyblue",
        }}
      >
        MarketPlace
      </h1>
      {togglesignup && (
        <Box component="form" onSubmit={(e)=> e.preventDefault()}>
          <Paper
            sx={{ width: 400, height: 400 }}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <TextField
              style={{
                width: "90%",
              }}
              required
              id="outlined-required"
              label="firstName"
              defaultValue=""
              onChange={getfName}
            />
            <TextField
              style={{
                width: "90%",
              }}
              required
              id="outlined-required"
              label="lastName"
              defaultValue=""
              onChange={getlName}
            />
            <TextField
              style={{
                width: "90%",
              }}
              required
              id="outlined-required"
              label="Email"
              defaultValue=""
              onChange={getEmail}
            />
            <TextField
              style={{
                width: "90%",
              }}
              required
              id="outlined-required"
              label="Password"
              defaultValue=""
              onChange={getPassword}
            />
            <div
              style={{
                width: "80%",
              }}
            >
              <Button
                style={{
                  width: "100%",
                  backgroundColor: "blue",
                  color: "white",
                  height: "7vh",
                }}
                variant="outlined"
                onClick={signUpHandler}
              >
                <strong>Sign-up</strong>
              </Button>
            </div>
            <div>
              <Button
                onClick={() => {
                  setToggleLogin(!togglelogin);
                  setToggleSignup(!togglesignup);
                }}
                className="toggle-signup"
              >
                Login instead
              </Button>
            </div>
          </Paper>
        </Box>
      )}

      {togglelogin && (
        <Box component="form">
          <Paper
            sx={{ width: 400, height: 400 }}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <TextField
              style={{
                width: "90%",
              }}
              required
              id="outlined-required"
              label="Email"
              defaultValue=""
              onChange={getLoginEmail}
            />
            <TextField
              style={{
                width: "90%",
              }}
              required
              id="outlined-required"
              label="Password"
              defaultValue=""
              onChange={getLoginPassword}
            />
            <div
              style={{
                width: "80%",
              }}
            >
              <Button
                style={{
                  width: "100%",
                  backgroundColor: "blue",
                  color: "white",
                  height: "7vh",
                }}
                variant="outlined"
                onClick={signInHandler}
              >
                <strong>Login</strong>
              </Button>
            </div>
            <Button
              onClick={() => {
                setToggleSignup(!togglesignup);
                setToggleLogin(!togglelogin);
              }}
              className="toggle-login"
            >
              Not registred? Sign-up
            </Button>
          </Paper>
        </Box>
      )}
      <Button style={{ display: "flex", gap: "10px" }}>
        <h1>
          <strong>G</strong>
        </h1>
        <p>Continue with gmail</p>
      </Button>
    </div>
  );
}
