import "dotenv/config";

import app from "./src/app.js";

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.on("error", (err) => {
  console.log(err);
});

process.on("uncaughtException", (err) => {
  console.log(err);
});

process.on("unhandledRejection", (err) => {
  console.log(err);
});

process.on("SIGINT", () => {
  console.log("SIGINT received, graceful shutdown");
  setTimeout(() => {
    process.exit(0);
  }, 1000);
});

process.on("SIGTERM", () => {
  console.log("SIGTERM received, graceful shutdown");
  setTimeout(() => {
    process.exit(0);
  }, 1000);
});

process.on("SIGKILL", () => {
  console.log("SIGKILL received, graceful shutdown");
  setTimeout(() => {
    process.exit(0);
  }, 1000);
});

process.on("SIGHUP", () => {
  console.log("SIGHUP received, graceful shutdown");
  setTimeout(() => {
    process.exit(0);
  }, 1000);
});

process.on("exit", () => {
  console.log("exit received, graceful shutdown");
  setTimeout(() => {
    process.exit(0);
  }, 1000);
});
