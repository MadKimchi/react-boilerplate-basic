import React, { FunctionComponent, ReactElement, useState } from 'react';
import { GrandParent } from './grand-parent.component';

export const GreatGrandParent: FunctionComponent = (): ReactElement => {
  const [amUpset, makeMeUpset] = useState(false);
  // let upsetCopy = false;

  const upsetGreatGrandParent = (): void => {
    makeMeUpset(!amUpset);
  };

  // const upsetGreatGrandParentCopy = (): void => {
  //   upsetCopy = !upsetCopy;
  // };

  return (
    <div className="great-grand-parent-container">
      <p>great grand parent</p>
      <GrandParent
        isUpset={amUpset}
        upsetGreatGrandParent={upsetGreatGrandParent}
      />
    </div>
  );

  // return (
  //   <div className="great-grand-parent-container">
  //     <p>great grand parent</p>
  //     <GrandParent
  //       isUpset={upsetCopy}
  //       upsetGreatGrandParent={upsetGreatGrandParentCopy}
  //     />
  //   </div>
};
