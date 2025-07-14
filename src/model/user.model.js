import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, 'Invalid email address'],
    },
    password: {
      type: String,
      required: true,
      //We are hashing the passwords so we don't need to validate the password format
    //   minLength: [6, "Must be at least 6 got {VALUE} characters"],
    //   maxLength: [12, "Must be at most 12 got {VALUE} characters"],
    },
    role:{
      type: String,
      enum: ["user","admin"],
      default: "user",
    }
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
