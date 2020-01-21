import React, { ReactNode } from 'react';
import { ITest2PageProp } from './interfaces';
import { BasePage } from '../../components/base-page/base-page.component';
import FormInvite from '../../components/forms/form-invite/form-invite.component';
import { Family2 } from './components/family.component';
import { ServiceContext } from '../../core/contexts/service.context';

export default class Test2Page extends BasePage<ITest2PageProp> {
  static contextType = ServiceContext;
  constructor(props: ITest2PageProp) {
    super(props);
    this.handleOpen = this.handleOpen.bind(this);
  }

  public handleOpen(): void {
    this.context.modalService.showModal(<div>Show Modal</div>);
  }

  public render(): ReactNode {
    return (
      <div className="test-page-container">
        <p>Test Family2 Hierarchy</p>
        <button type="button" onClick={this.handleOpen}>
          Open Modal
        </button>
        <Family2 />
      </div>
    );
  }
}
