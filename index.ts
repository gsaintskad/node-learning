import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
const commentsRouter = require("./controllers/comments.ts");
const usersRouter = require("./controllers/users.ts");
const rootRouter = require("./controllers/root.ts");
dotenv.config();

const app = express();


app.use("/", rootRouter);
app.use("/comments", commentsRouter);
app.use("/users", usersRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
