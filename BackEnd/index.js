const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

const UserRouter = require("./Routers/user");
const ContactRouter = require("./Routers/contact");
const LibraryRouter = require("./Routers/library");
const AdminRouter = require("./Routers/admin");





// Middleware
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000", "*"],
  })
);

app.use("/user", UserRouter);
app.use("/contact", ContactRouter);
app.use("/library", LibraryRouter);
app.use("/admin", AdminRouter);






app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
