import { IdentifierEnum } from '../enums';

export interface IMessage<T> {
  sender: IdentifierEnum;
  receiver: IdentifierEnum;
  data: T;
  identifier?: string;
}
