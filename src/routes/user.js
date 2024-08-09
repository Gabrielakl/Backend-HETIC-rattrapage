import express from "express";
import * as userController from "../controllers/user.js";

const userRouter = express.Router();

userRouter.get('/:id', (req, res) => {
  userController.getOneUser(req, res)
});

userRouter.post('/', (req, res) => {
  userController.createUser(req, res)
});

userRouter.put('/:id', (req, res) => {
  userController.updateUser(req, res)
});

userRouter.delete('/:id', (req, res) => {
  userController.deleteUser(req, res)
});

export { userRouter };