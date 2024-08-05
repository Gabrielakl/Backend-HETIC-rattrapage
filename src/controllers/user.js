import { HTTP_STATUS_CODE } from "../utils/UHttp";
import * as userRepository from "../repositories/user";

const getOneUser = async (req, res) => {
    try {
      const user = await userRepository.getUser(req.params.id);
      res.status(HTTP_STATUS_CODE.OK).json(user);
    } catch (error) {
      res.status(HTTP_STATUS_CODE.NOT_FOUND).json({ message: "User not found" });
    }
};

const createUser = async (req, res) => {
    try {
      const user = await userRepository.addUser(req.body);
      res.status(HTTP_STATUS_CODE.CREATED).json(user);
    } catch (error) {
      res.status(HTTP_STATUS_CODE.BAD_REQUEST).json({ message: "User not created" });
    }
};

const updateUser = async (req, res) => {
    try {
      const user = await userRepository.updateUser(req.params.id, req.body);
      res.status(HTTP_STATUS_CODE.OK).json(user);
    } catch (error) {
      res.status(HTTP_STATUS_CODE.BAD_REQUEST).json({ message: "User not updated" });
    }
};

const deleteUser = async (req, res) => {
    try {
      await userRepository.deleteUser(req.params.id);
      res.status(HTTP_STATUS_CODE.NO_CONTENT).json();
    } catch (error) {
      res.status(HTTP_STATUS_CODE.BAD_REQUEST).json({ message: "User not deleted" });
    }
};

export { getOneUser, createUser, updateUser, deleteUser };
  