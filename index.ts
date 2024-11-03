import express, {NextFunction, Request, Response} from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const getRoot=(req: Request, res: Response, next:NextFunction) => {
  res.send('Hello World!');
  next();
}
const getRootNext=(req: Request, res: Response) => {
  console.log('This is the next middleware');
}

const getComments=(req: Request, res: Response, next:NextFunction) => {
  res.send('Hello Comments!');
  next();
}
const getCommentsNext=(req: Request, res: Response) => {
  console.log('This is the get comments next middleware');
}
const postComments=(req: Request, res: Response, next:NextFunction) => {
  res.send('post comments!');
  next();
}

const postCommentsNext=(req: Request, res: Response) => {
  console.log('This is the post comments next middleware');
}
app.get('/', getRoot,getRootNext);
app.get('/comments', getComments,getCommentsNext);
app.post('/comments', postComments,postCommentsNext);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});