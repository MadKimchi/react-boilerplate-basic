import { Subject } from 'rxjs';
import { IMessage } from '../interfaces';

export class MessageService {
  public onMessage: Subject<IMessage<any>> = new Subject<IMessage<any>>();

  // TODO: add a method to sendMessage with parameter
  // TODO: add a method to subscribe with filter
}
