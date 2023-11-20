import amqp from "amqplib";
import { MessageProducerService } from "jobs/MessageProducerService";
import { inject, injectable } from "tsyringe";

import { IMessageRepository } from "../infra/Repositories/IMessageRepository";
import { MessageRepository } from "../infra/Repositories/MessageRepository";

injectable();
export class ListMessagesUseCase {
  constructor(
    @inject(MessageRepository)
    private messageRepository: IMessageRepository,
    private messageProducerService: MessageProducerService,
  ) {}

  async execute(): Promise<void> {
    const messages = await this.messageRepository.list();

    const rabbitMQUrl = "amqp://localhost";
    const queue = "message-queue";

    // Criar uma única conexão para todas as mensagens
    const connection = await amqp.connect(rabbitMQUrl);

    // Enviar cada mensagem usando a conexão
    await Promise.all(
      messages.map(async (message) => {
        await this.messageProducerService.sendMessage(
          connection,
          queue,
          message,
        );
      }),
    );

    // Fechar a conexão após enviar todas as mensagens
    await connection.close();
  }
}
