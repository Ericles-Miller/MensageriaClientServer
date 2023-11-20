import { CreateRandomMessageController } from "@modules/message/CreateRandomMessage/CreateRandomMessageController";
import { ListMessageController } from "@modules/message/listMessages/ListMessagesController";
import { Router } from "express";

export const messageRouter = Router();

const createRandomMessageController = new CreateRandomMessageController();
const listMessageController = new ListMessageController();

messageRouter.post("/", createRandomMessageController.handle);
messageRouter.get("/", listMessageController.handle);
