import express, {NextFunction, Request, Response} from "express";

const getUsers = (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello Users!");
  next();
};
const getUsersNext = (req: Request, res: Response) => {
  console.log("This is the get Users next middleware");
  // console.log(req.params);
};
const getUser = (req: Request, res: Response, next: NextFunction) => {
  res.send(`Hello Users! your User id is ${req.params.userid}`);
  //asd
};
const postUsers = (req: Request, res: Response, next: NextFunction) => {
  res.send("post Users!");
  next();
};

const postUsersNext = (req: Request, res: Response) => {
  console.log("This is the post Users next middleware");
};

const deleteSingleUser = (req: Request, res: Response, next: NextFunction) => {
  res.send(`Deleting a single User by id ${req.params.userId}`);
}
const deleteUsers = (req: Request, res: Response, next: NextFunction) => {
  res.send(`Deleting all Users`);
  next();
}
const deleteUsersNext = (req: Request, res: Response) => {
  console.log("This is the delete Users next middleware" +
    "\nall Users have been deleted");
}


const router= express.Router();
router.get("", getUsers,getUsersNext);
router.get("/:userid", getUser);
router.post("", postUsers,postUsersNext);
router.delete("/:userId", deleteSingleUser);
router.delete("",deleteUsers, deleteUsersNext);


module.exports = router;