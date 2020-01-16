export interface IMessage<T> {
  receiverIdentifier: string;
  senderIdentifier: string;
  data: T;
}
