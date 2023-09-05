import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app";

dotenv.config();
const port =  7001;
mongoose
  .connect(process.env.MONGOAPI as string)
  .then(() => {
    app.listen(port, () => {
      console.log("server is running in port 5000");
    });
  })
  .catch((error) => console.log(error));
