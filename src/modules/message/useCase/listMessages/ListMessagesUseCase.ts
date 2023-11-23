import amqp from "amqplib";
import { IMessageProducerService } from "jobs/IMessageProducerService";
import { MessageProducerService } from "jobs/MessageProducerService";
import { inject, injectable } from "tsyringe";

import { IMessageRepository } from "../../infra/Repositories/IMessageRepository";
import { MessageRepository } from "../../infra/Repositories/MessageRepository";

@injectable()
export class ListMessagesUseCase {
  constructor(
    @inject(MessageRepository)
    private messageRepository: IMessageRepository,
    @inject(MessageProducerService)
    private messageProducerService: IMessageProducerService,
  ) {}

  async execute(): Promise<void> {
    const messages = await this.messageRepository.list();

    const rabbitMQUrl = "amqp://localhost";
    const queue = "message-queue";

    const connection = await amqp.connect(rabbitMQUrl);

    await Promise.all(
      messages.map(async (message) => {
        await this.messageProducerService.sendMessage(
          connection,
          queue,
          message,
        );
      }),
    );

    await connection.close();
  }
}
