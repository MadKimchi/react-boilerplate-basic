import React, { FunctionComponent, ReactElement, useState } from 'react';
import { GrandChild } from './grand-child.component';
import { ITestProp } from '../interfaces';

export const Child: FunctionComponent<ITestProp> = (
  props: ITestProp
): ReactElement => {
  return (
    <div className="child-container">
      <p>child</p>
      <GrandChild {...props} />
    </div>
  );
};
