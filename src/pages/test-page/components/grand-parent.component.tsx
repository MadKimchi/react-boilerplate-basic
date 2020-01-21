import React, { FunctionComponent, ReactElement, useState } from 'react';
import { Parent } from './parent.component';
import { ITestProp } from '../interfaces';

export const GrandParent: FunctionComponent<ITestProp> = (
  props: ITestProp
): ReactElement => {
  const [open, setOpen] = useState(false);
  const [component, setComponent] = useState({});

  return (
    <div className="grand-parent-container">
      <p>grand parent</p>
      <Parent {...props} />
    </div>
  );
};
