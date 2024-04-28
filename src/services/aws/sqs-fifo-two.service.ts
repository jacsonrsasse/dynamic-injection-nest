import { SqsFifoService } from './sqs-fifo-base.service';

export class SqsFifoTwoService extends SqsFifoService {
  constructor() {
    super(process.env.QUEUE_URL_TWO, process.env.AWS_REGION);
  }
}
