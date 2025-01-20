import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    profilePicture: String,
    coverPicture: String,
    followers: [],
    following: [],
    resetToken: String, // For Forgot Password
  },
  { timestamps: true }
);

const UserModel = mongoose.model("Users", UserSchema);
export default UserModel;
