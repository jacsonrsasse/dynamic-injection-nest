import { SqsFifoInterface } from './sqs-fifo.interface';
import { SQSClient, SendMessageCommand } from '@aws-sdk/client-sqs';

export abstract class SqsFifoService implements SqsFifoInterface {
  protected readonly sqs: SQSClient;

  constructor(
    private readonly queueUrl: string,
    private readonly region: string,
  ) {
    this.sqs = new SQSClient({
      region: this.region,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
    });
  }

  async send(message: string): Promise<void> {
    const command = new SendMessageCommand({
      MessageBody: message,
      QueueUrl: this.queueUrl,
    });

    await this.sqs.send(command);
  }
}
