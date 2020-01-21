import React, { FunctionComponent, ReactElement, useState } from 'react';
import { ITestProp } from '../interfaces';

export const GrandChild: FunctionComponent<ITestProp> = ({
  upsetGreatGrandParent,
  isUpset
}): ReactElement => {
  return (
    <div className="grand-child-container">
      <p>{isUpset ? 'Bad' : 'Good'} grand child</p>
      <button onClick={upsetGreatGrandParent}>
        {isUpset ? 'Calm Great Grand Parent' : 'Upset Great Grand Parent'}
      </button>
    </div>
  );
};
