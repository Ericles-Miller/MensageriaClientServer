import { IMessageRepository } from "@modules/message/infra/Repositories/IMessageRepository";
import { MessageRepository } from "@modules/message/infra/Repositories/MessageRepository";
import { container } from "tsyringe";

container.registerSingleton<IMessageRepository>(
  "MessageRepository",
  MessageRepository,
);
