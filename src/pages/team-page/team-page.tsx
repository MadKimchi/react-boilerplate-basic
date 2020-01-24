import React, { ReactNode } from 'react';
import { ITeamPageProp } from './team-page.interface';
import { BasePage, FormInvite } from '../../components';

export default class TeamPage extends BasePage<ITeamPageProp> {
  constructor(props: ITeamPageProp) {
    super(props);
    this.navigateBack = this.navigateBack.bind(this);
    this.openModal = this.openModal.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  public render(): ReactNode {
    return (
      <div>
        <p>Team</p>
        <button onClick={this.navigateBack}>go back</button>
        <button onClick={this.openModal}>open a modal</button>
        <button onClick={this.signOut}>sign out</button>
      </div>
    );
  }

  private navigateBack(): void {
    this.context.routeService.goBack();
  }

  private openModal(): void {
    this.context.modalService.onInjection.next(
      <FormInvite isModalable={true} />
    );
  }

  private signOut(): void {
    this.context.authService.signOut();
  }
}
