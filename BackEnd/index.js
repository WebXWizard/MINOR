const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Routers
const UserRouter = require("./Routers/user");
const ContactRouter = require("./Routers/contact");
const LibraryRouter = require("./Routers/library");
const AdminRouter = require("./Routers/admin");

// Middleware
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000"], // frontend
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// API Routes (IMPORTANT)
app.use("/user", UserRouter);
app.use("/contact", ContactRouter);
app.use("/library", LibraryRouter);
app.use("/admin", AdminRouter);

// Health check (VERY IMPORTANT for debugging)
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

// Start server (bind to localhost for security)
app.listen(PORT, "127.0.0.1", () => {
  console.log(`Server is running on port ${PORT}`);
});
