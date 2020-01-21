import React, { ReactNode } from 'react';
import { ITestPageProp } from './interfaces';
import { BasePage } from '../../components/base-page/base-page.component';
import FormInvite from '../../components/forms/form-invite/form-invite.component';
import { Family } from './components/family.component';
import { Modal } from '@material-ui/core';

export default class TestPage extends BasePage<ITestPageProp> {
  public state = {
    open: false
  };
  constructor(props: ITestPageProp) {
    super(props);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  public handleOpen(): void {
    this.setState({ open: true });
  }

  public handleClose(): void {
    this.setState({ open: false });
  }

  public render(): ReactNode {
    const modalStyle = {
      top: '50%',
      left: '50%',
      backgroundColor: 'white'
    };
    return (
      <div className="test-page-container">
        <p>Test Family Hierarchy</p>
        <button type="button" onClick={this.handleOpen}>
          Open Modal
        </button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={modalStyle}>
            <h2 id="simple-modal-title">Text in a modal</h2>
            <p id="simple-modal-description">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>
          </div>
        </Modal>
        <Family />
      </div>
    );
  }
}
