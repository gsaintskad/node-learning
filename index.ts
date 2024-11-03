import express, {NextFunction, Request, Response} from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const getMain=(req: Request, res: Response, next:NextFunction) => {
  res.send('Hello World!');
  next();
}
const getMainNext=(req: Request, res: Response) => {
  console.log('This is the next middleware');
}
app.get('/', getMain,getMainNext);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});