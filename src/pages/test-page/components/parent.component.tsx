import React, { FunctionComponent, ReactElement, useState } from 'react';
import { Child } from './child.component';
import { ITestProp } from '../interfaces';

export const Parent: FunctionComponent<ITestProp> = (
  props: ITestProp
): ReactElement => {
  return (
    <div className="parent-container">
      <p>parent</p>
      <Child {...props} />
    </div>
  );
};
