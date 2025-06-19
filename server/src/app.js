import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import asyncHandler from "express-async-handler";

import ErrorMiddleware from "./middlewares/error.middleware.js";
import ErrorHandler from "./lib/error/ErrorHandler.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN,
    credentials: true,
  })
);
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(helmet());

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/err", (req, res, next) =>
  next(new ErrorHandler(500, "Random Error"))
);

app.get(
  "/promise",
  asyncHandler(async (req, res) => {
    await Promise.reject(new ErrorHandler(500, "Random Error"));
  })
);

app.use((req, res, next) => {
  res.status(404).json({
    status: 404,
    message: "Requested resource was not found",
  });
});

app.use(ErrorMiddleware);

export default app;
