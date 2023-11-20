import { Message } from "@prisma/client";
import amqp from "amqplib";
import { injectable } from "tsyringe";

@injectable()
export class MessageProducerService {
  constructor() {}

  async sendMessage(
    connection: amqp.Connection,
    queue: string,
    message: Message,
  ) {
    const canal = await connection.createChannel();

    await canal.assertQueue(queue, { durable: false });

    const SendMessage = JSON.stringify(message);
    canal.sendToQueue(queue, Buffer.from(SendMessage));

    console.log(`[x] Send Message by RabbitMQ: ${SendMessage}`);

    // Não feche o canal aqui, apenas retorne a promessa
    return canal;
  }
}
