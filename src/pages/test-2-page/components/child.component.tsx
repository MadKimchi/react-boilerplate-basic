import React, { FunctionComponent, ReactElement, useState } from 'react';
import { GrandChild } from './grand-child.component';

export const Child: FunctionComponent = (): ReactElement => {
  return (
    <div className="child-container">
      <p>child</p>
      {/* <GrandChild /> */}
    </div>
  );
};
