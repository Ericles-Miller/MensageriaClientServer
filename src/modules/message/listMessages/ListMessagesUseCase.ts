import { inject, injectable } from "tsyringe";

import { IMessageRepository } from "../infra/Repositories/IMessageRepository";
import { MessageRepository } from "../infra/Repositories/MessageRepository";

injectable();
export class ListMessagesUseCase {
  constructor(
    @inject(MessageRepository)
    private messageRepository: IMessageRepository,
  ) {}

  async execute(): Promise<void> {
    const messages = await this.messageRepository.list();

    
  }
}
