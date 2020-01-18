import React, { ReactNode } from 'react';
import { INotFoundPageProp } from './interfaces';
import { BasePage } from '../../components/base-page/base-page.component';

export default class NotFoundPage extends BasePage<INotFoundPageProp> {
  constructor(props: any) {
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
    // this.context.routeService.goBack();
    this.context.routeService.navigate('login');
  }
}
