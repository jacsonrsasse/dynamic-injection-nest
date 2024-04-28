import { SqsFifoService } from './sqs-fifo-base.service';

export class SqsFifoOneService extends SqsFifoService {
  constructor() {
    super(process.env.QUEUE_URL_ONE, process.env.AWS_REGION);
  }
}
