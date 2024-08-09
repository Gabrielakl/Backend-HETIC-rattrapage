import express from "express";
import { jwtVerifyToken } from "../middlewares/jwt.js";
import * as userController from "../controllers/user.js";

const userRouter = express.Router();

userRouter.get('/:id', [jwtVerifyToken], (req, res) => {
  userController.getOneUser(req, res)
});

userRouter.post('/', (req, res) => {
  userController.createUser(req, res)
});

userRouter.put('/:id', [jwtVerifyToken], (req, res) => {
  userController.updateUser(req, res)
});

userRouter.delete('/:id', [jwtVerifyToken], (req, res) => {
  userController.deleteUser(req, res)
});

export { userRouter };