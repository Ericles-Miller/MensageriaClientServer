/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
import { faker } from '@faker-js/faker';
import { inject, injectable } from "tsyringe";

import { IMessageRepository } from "../infra/Repositories/IMessageRepository";
import { MessageRepository } from "../infra/Repositories/MessageRepository";

@injectable()
export class CreateRandomMessageUseCase {
  constructor(
    @inject(MessageRepository)
    private messageRepository: IMessageRepository,
  ) {}

  async execute(): Promise<void> {
    const promises: Promise<void>[] = [];

    for (let i = 0; i < 100; i += 1) {
      const email = faker.internet.email();
      const username = faker.internet.userName();
      const description = faker.lorem.sentence();

      promises.push(
        this.messageRepository.create({ email, description, username }),
      );
    }

    await Promise.all(promises);
  }
}
