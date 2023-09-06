import React, { useState } from "react";
import { Box, Paper, TextField, Button } from "@mui/material";

export default function Signup() {
  const [togglelogin, setToggleLogin] = useState(true);
  const [togglesignup, setToggleSignup] = useState(false);

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
              label="Name"
              defaultValue=""
            />
            <TextField
              style={{
                width: "90%",
              }}
              required
              id="outlined-required"
              label="Phone"
              defaultValue=""
            />
            <TextField
              style={{
                width: "90%",
              }}
              required
              id="outlined-required"
              label="Email"
              defaultValue=""
            />
            <TextField
              style={{
                width: "90%",
              }}
              required
              id="outlined-required"
              label="Password"
              defaultValue=""
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
            />
            <TextField
              style={{
                width: "90%",
              }}
              required
              id="outlined-required"
              label="Password"
              defaultValue=""
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
    </div>
  );
}
