import express, { NextFunction, Request, Response } from "express";

const getComments = (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello Comments!");
  next();
};
const getCommentsNext = (req: Request, res: Response) => {
  console.log("This is the get comments next middleware");
  // console.log(req.params);
};
const getComment = (req: Request, res: Response, next: NextFunction) => {
  res.send(`Hello Comments! your comment id is ${req.params.commentid}`);
  //asd
};
const postComments = (req: Request, res: Response, next: NextFunction) => {
  res.send("post comments!");
  next();
};

const postCommentsNext = (req: Request, res: Response) => {
  console.log("This is the post comments next middleware");
};

const deleteSingleComment = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.send(`Deleting a single comment by id ${req.params.commentId}`);
};
const deleteComments = (req: Request, res: Response, next: NextFunction) => {
  res.send(`Deleting all comments`);
  next();
};
const deleteCommentsNext = (req: Request, res: Response) => {
  console.log(
    "This is the delete comments next middleware" +
      "\nall comments have been deleted",
  );
};

const router = express.Router();
router.get("", getComments, getCommentsNext);
router.get("/:commentid", getComment);
router.post("", postComments, postCommentsNext);
router.delete("/:commentId", deleteSingleComment);
router.delete("", deleteComments, deleteCommentsNext);

module.exports = router;
