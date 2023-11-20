import { CreateRandomMessageController } from "@modules/message/CreateRandomMessage/CreateRandomMessageController";
import { Router } from "express";

export const messageRouter = Router();

const createRandomMessageController = new CreateRandomMessageController();

messageRouter.post("/", createRandomMessageController.handle);
