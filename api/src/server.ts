import mongoose from "mongoose";
import dotenv from "dotenv";

import app from "./app";

dotenv.config();

const port =  7001;

mongoose
  .connect(process.env.MONGOAPI as string)
  .then(() => {
   app.listen(port, () => {
      console.log(`server is running at port ${port}.`);
    });
  })
  .catch((error: Error) => {
    console.log(
      "MongoDB connection error. Please make sure the database is running."
    );
    process.exit(1);
  });