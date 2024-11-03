import express, {NextFunction, Request, Response} from "express";

const getRoot = (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World!");
  next();
};
const getRootNext = (req: Request, res: Response) => {
  console.log("This is the next middleware");
};

const router = express.Router();
router.get("", getRoot,getRootNext);

module.exports = router;