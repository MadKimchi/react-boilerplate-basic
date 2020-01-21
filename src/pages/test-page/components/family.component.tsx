import React, { FunctionComponent, ReactElement, useState } from 'react';
import { GrandParent } from './grand-parent.component';
import { GreatGrandParent } from './great-grand-parent.component';

export const Family: FunctionComponent = (): ReactElement => {
  return (
    <div className="great-grand-parent-container">
      <p>Family Hierarchy</p>
      <GreatGrandParent />
    </div>
  );
};
