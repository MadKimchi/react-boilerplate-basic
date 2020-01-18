import React, { ReactNode } from 'react';
import { ITeamPageProp } from './interfaces';
import { BasePage } from '../../components/base-page/base-page.component';

export default class TeamPage extends BasePage<ITeamPageProp> {
  constructor(props: ITeamPageProp) {
    super(props);
    this.navigateBack = this.navigateBack.bind(this);
    console.log('????');
  }

  public render(): ReactNode {
    return (
      <p>
        Team<button onClick={this.navigateBack}>go back</button>
      </p>
    );
  }

  private navigateBack(event: any): void {
    this.context.routeService.goBack();
  }
}
