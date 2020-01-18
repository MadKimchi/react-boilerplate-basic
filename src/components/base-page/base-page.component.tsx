import { Component } from 'react';
import { ServiceContext } from '../../core/contexts/service.context';
import { IBasePageProp } from './base-page.interface';
// TODO: add state generic type
export class BasePage<P extends IBasePageProp> extends Component<P> {
  static contextType = ServiceContext;

  public componentDidMount(): void {
    this.context.routeService.history = this.props.history;
  }
}
