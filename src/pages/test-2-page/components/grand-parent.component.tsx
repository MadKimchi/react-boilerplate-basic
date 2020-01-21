import React, { FunctionComponent, ReactElement, useState } from 'react';
import { Parent } from './parent.component';

export const GrandParent: FunctionComponent = (): ReactElement => {
  const [open, setOpen] = useState(false);

  return (
    <div className="grand-parent-container">
      <p>grand parent</p>
      {/* <Parent /> */}
    </div>
  );
};
