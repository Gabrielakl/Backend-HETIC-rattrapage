import express, { Request, Response } from "express";
import * as userController from "../controllers/user";

const userRouter = require('express')

const router = express.Router()

userRouter.get('/:id', (req, res) => {
  userController.getOneUser(req, res)
});

userRouter.post('/', (req, res) => {
  userController.createUser(req, res)
});

userRouter.put('/', (req, res) => {
  userController.updateUser(req, res)
});

userRouter.delete('/:id', (req, res) => {
  userController.deleteUser(req, res)
});

export { userRouter };