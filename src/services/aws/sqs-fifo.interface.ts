export interface SqsFifoInterface {
  send(message: string): Promise<void>;
}
