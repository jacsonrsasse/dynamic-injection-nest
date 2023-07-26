export interface DataDispatcherServiceInterface {
  send(payload: any): any | Promise<any>;
}
