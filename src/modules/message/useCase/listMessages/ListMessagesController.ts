import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListMessagesUseCase } from "./ListMessagesUseCase";

export class ListMessageController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listMessagesUseCase = container.resolve(ListMessagesUseCase);
    await listMessagesUseCase.execute();

    return response.status(201).send();
  }
}
