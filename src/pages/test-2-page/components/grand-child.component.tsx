import React, {
  FunctionComponent,
  ReactElement,
  useState,
  useContext,
  useEffect
} from 'react';
import { ServiceContext } from '../../../core/contexts/service.context';
import { IMessage } from '../../../core/interfaces';
import { takeWhile, filter } from 'rxjs/operators';
import { IdentifierEnum } from '../../../core/enums';

export const GrandChild: FunctionComponent = ({}): ReactElement => {
  const { messageService } = useContext(ServiceContext);
  const [amGood, makeMeGoodBoy] = useState(false);

  const grandChildTag = 'grandChild2';

  useEffect(() => {
    const _messageSubscription = messageService
      .receiveMessage<boolean>(
        IdentifierEnum.grandChild,
        IdentifierEnum.grandParent
      )
      .subscribe((isUpset: boolean) => makeMeGoodBoy(!isUpset));

    return () => {
      _messageSubscription.unsubscribe();
    };
  }, []);

  const calmDownGreatGrandParent = (): void => {
    const saidToGreatGrand = !amGood ? 'I am sorry' : 'You suck up tax money';

    messageService.sendMessage(
      IdentifierEnum.grandChild,
      IdentifierEnum.grandParent,
      saidToGreatGrand
    );
  };

  return (
    <div className="grand-child-container">
      <p>{!amGood ? 'Bad' : 'Good'} grand child</p>
      <button onClick={calmDownGreatGrandParent}>
        {!amGood ? 'Calm Great Grand Parent' : 'Upset Great Grand Parent'}
      </button>
    </div>
  );
};
