import express from "express";

const commentsRouter = require("./comments.ts");
const usersRouter = require("./users.ts");
const rootRouter = require("./root.ts");

const router = express.Router();

router.use("/", rootRouter);
router.use("/comments", commentsRouter);
router.use("/users", usersRouter);

module.exports = router;
