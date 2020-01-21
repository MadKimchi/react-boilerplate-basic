import React, { FunctionComponent, ReactElement, useState } from 'react';
import { Child } from './child.component';

export const Parent: FunctionComponent = (): ReactElement => {
  return (
    <div className="parent-container">
      <p>parent</p>
      {/* <Child /> */}
    </div>
  );
};
