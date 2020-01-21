import { Subject, Observable } from 'rxjs';
import { IMessage } from '../interfaces';
import { filter, map } from 'rxjs/operators';
import { IdentifierEnum } from '../enums';

export class MessageService {
  public onMessage: Subject<IMessage<any>> = new Subject<IMessage<any>>();

  public sendMessage<T>(
    sender: IdentifierEnum,
    receiver: IdentifierEnum,
    data: T
  ): void {
    this.onMessage.next({ sender, receiver, data } as IMessage<T>);
  }

  public receiveMessage<T>(
    receiver: IdentifierEnum,
    sender: IdentifierEnum,
    extraFilter: boolean = true
  ): Observable<T> {
    return this.onMessage.pipe(
      filter((message: IMessage<T>) => {
        return (
          message.receiver === receiver &&
          message.sender === sender &&
          extraFilter
        );
      }),
      map((message: IMessage<T>) => {
        return message.data;
      })
    );
  }
}
