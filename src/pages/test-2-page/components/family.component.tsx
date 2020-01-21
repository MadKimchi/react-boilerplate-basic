import React, { FunctionComponent, ReactElement, useState } from 'react';
import { GreatGrandParent2 } from './great-grand-parent.component';
import { GrandParent } from './grand-parent.component';
import { Parent } from './parent.component';
import { Child } from './child.component';
import { GrandChild } from './grand-child.component';

export const Family2: FunctionComponent = (): ReactElement => {
  return (
    <div className="great-grand-parent-container">
      <p>Family 2 Hierarchy</p>
      <GreatGrandParent2 />
      <GrandParent />
      <Parent />
      <Child />
      <GrandChild />
    </div>
  );
};
