import express from "express";
import dotenv from "dotenv";

const mainRouter=require("./controllers/mainRouter.ts");

dotenv.config();

const app = express();

app.use('',mainRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
