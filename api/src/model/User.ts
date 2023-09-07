import mongoose, { Document } from "mongoose";

export type UserDocument = Document & {
  firstName: string;
  lastName: string;
  enum: "user" | "admin";
  email: string;
  password: string;
  banned: boolean;
  
};

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  // this commented out because of google login that doesnt have password and gives error.
  // required: true,
  },
  banned: {
    type: Boolean,
  },

});
export default mongoose.model<UserDocument>("User", UserSchema);
