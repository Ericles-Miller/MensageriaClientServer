import { Message, PrismaClient } from "@prisma/client";

import { IResponseCreateMessageDTO } from "./Dtos/IResponseCreateMessageDTO";
import { IMessageRepository } from "./IMessageRepository";

export class MessageRepository implements IMessageRepository {
  private repository = new PrismaClient().message;

  async create({
    description,
    email,
    username,
  }: IResponseCreateMessageDTO): Promise<void> {
    await this.repository.create({
      data: {
        description,
        email,
        username,
      },
    });
  }

  list(): Promise<Message[]> {
    throw new Error("Method not implemented.");
  }
}
