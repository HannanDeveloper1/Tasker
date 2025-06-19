import "dotenv/config";

import app from "./src/app.js";

const PORT = process.env.PORT;

app.listen(PORT, () => {
  const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

  const gracefulShutdown = (signal) => {
    console.log(`${signal} received, graceful shutdown`);
    server.close((err) => {
      if (err) {
        console.error("Error during server close:", err);
        process.exit(1);
      }
      console.log("Server closed successfully");
      process.exit(0);
    });

    // Force close after timeout
    setTimeout(() => {
      console.log("Forcing shutdown...");
      process.exit(1);
    }, 10000);
  };

  process.on("SIGINT", () => {
    console.log("SIGINT received, graceful shutdown");
    setTimeout(() => {
      process.exit(0);
    }, 1000);
    gracefulShutdown("SIGINT");
  });

  process.on("SIGTERM", () => {
    console.log("SIGTERM received, graceful shutdown");
    setTimeout(() => {
      process.exit(0);
    }, 1000);
    gracefulShutdown("SIGTERM");
  });

  process.on("SIGHUP", () => {
    console.log("SIGHUP received, graceful shutdown");
    setTimeout(() => {
      process.exit(0);
    }, 1000);
    gracefulShutdown("SIGHUP");
  });
});
