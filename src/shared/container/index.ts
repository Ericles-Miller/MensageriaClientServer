import { IMessageRepository } from "@modules/message/infra/Repositories/IMessageRepository";
import { MessageRepository } from "@modules/message/infra/Repositories/MessageRepository";
import { IMessageProducerService } from "jobs/IMessageProducerService";
import { MessageProducerService } from "jobs/MessageProducerService";
import { container } from "tsyringe";

container.registerSingleton<IMessageRepository>(
  "MessageRepository",
  MessageRepository,
);

container.registerSingleton<IMessageProducerService>(
  "MessageProducerService",
  MessageProducerService,
);
