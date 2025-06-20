import asyncHandler from "express-async-handler";

import User from "../models/userModel";
import ErrorHandler from "../lib/error/ErrorHandler";
import { issueAccessToken, issueRefreshToken } from "../lib/utils/issueTokens";

export const registerUser = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    next(new ErrorHandler(400, "User already exists"));
  }

  const user = await User.create({ name, email, password });

  const refreshToken = await issueRefreshToken({ id: user._id });
  const accessToken = await issueAccessToken(user._id);

  res.status(201).json({ success: true, user, accessToken });
});
