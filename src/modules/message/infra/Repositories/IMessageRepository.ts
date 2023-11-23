import { Message } from "@prisma/client";

import { IResponseCreateMessageDTO } from "./Dtos/IResponseCreateMessageDTO";

export interface IMessageRepository {
  create({
    description,
    email,
    username,
  }: IResponseCreateMessageDTO): Promise<void>;

  list(): Promise<Message[]>;
}
