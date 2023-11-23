import { Router } from "express";

import { messageRouter } from "./message.routes";

export const router = Router();

router.use("/messages", messageRouter);
