import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateRandomMessageUseCase } from "./CreateRandomMessageUseCase";

export class CreateRandomMessageController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createRandomMessageUseCase = container.resolve(
      CreateRandomMessageUseCase,
    );

    await createRandomMessageUseCase.execute();

    return response.status(201).send();
  }
}
