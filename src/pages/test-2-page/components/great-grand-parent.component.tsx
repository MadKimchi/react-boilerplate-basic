import React, {
  FunctionComponent,
  ReactElement,
  useState,
  useEffect,
  useContext,
  Component,
  ReactNode
} from 'react';
import { GrandParent } from './grand-parent.component';
import { ServiceContext } from '../../../core/contexts/service.context';
import { takeWhile, filter } from 'rxjs/operators';
import { IMessage } from '../../../core/interfaces';
import { Subscription } from 'rxjs';
import { IdentifierEnum } from '../../../core/enums';

export class GreatGrandParent2 extends Component {
  static contextType = ServiceContext;

  public state = { isUpset: true };

  private _messageSubscription!: Subscription; // prettier-ignore

  public componentDidMount(): void {
    this.subscribeToSubjects();
  }

  public componentWillUnmount(): void {
    this._messageSubscription.unsubscribe();
  }

  public render(): ReactNode {
    return (
      <div className="great-grand-parent-container">
        <p>great grand parent {this.state.isUpset ? 'upset' : 'fine'}</p>
      </div>
    );
  }

  private subscribeToSubjects(): void {
    this._messageSubscription = this.context.messageService
      .receiveMessage(IdentifierEnum.grandParent, IdentifierEnum.grandChild)
      .subscribe((message: string) => {
        const forgive = message === 'I am sorry';
        this.setState(
          { isUpset: !forgive },
          () =>
            this.context.messageService.sendMessage(
              IdentifierEnum.grandParent,
              IdentifierEnum.grandChild,
              this.state.isUpset
            )
          // true
        );
      });
  }
}

// export const GreatGrandParent2: FunctionComponent = (): ReactElement => {
//   const { messageService } = useContext(ServiceContext);
//   // const [amUpset, makeMeUpset] = useState(false);
//   let amUpset = false;

//   useEffect(() => {
//     const _messageSubscription = messageService.onMessage
//       .pipe(
//         filter(
//           (message: IMessage<string>) =>
//             message.senderIdentifier === 'grandChild2' &&
//             message.receiverIdentifier === 'greatGrandParent2'
//         )
//       )
//       .subscribe((message: IMessage<string>) => {
//         console.log(message);
//         const forgive = message.data === 'I am sorry';
//         amUpset = !forgive;

//         messageService.onMessage.next({
//           receiverIdentifier: 'grandChild2',
//           senderIdentifier: 'greatGrandParent2',
//           data: amUpset
//         });
//       });

//     return () => {
//       _messageSubscription.unsubscribe();
//     };
//   }, []);

//   return (
//     <div className="great-grand-parent-container">
//       <p>great grand parent</p>
//       <GrandParent />
//     </div>
//   );
// };
