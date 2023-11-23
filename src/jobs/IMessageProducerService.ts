import { Message } from "@prisma/client";
import amqp from "amqplib";

export interface IMessageProducerService {
  sendMessage(
    connection: amqp.Connection,
    queue: string,
    message: Message,
  ): void;
}
