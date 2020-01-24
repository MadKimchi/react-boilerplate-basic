import React, { ReactNode } from 'react';

import { BasePage } from '../../components';
import { RouteEnum } from '../../core';
import { INotFoundPageProp } from './not-found-page.interface';

export default class NotFoundPage extends BasePage<INotFoundPageProp> {
  constructor(props: INotFoundPageProp) {
    super(props);
    this.navigateBack = this.navigateBack.bind(this);
  }

  public render(): ReactNode {
    return (
      <p>
        Not Found!<button onClick={this.navigateBack}>go back</button>
      </p>
    );
  }

  private navigateBack(event: any): void {
    this.context.routeService.navigate(RouteEnum.login);
  }
}
