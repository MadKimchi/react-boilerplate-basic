import { Subject } from 'rxjs';
import { Component, FunctionComponent } from 'react';

export class ModalService<T> {
  // **NOTE**:
  // One of the few exceptions to accommodate Type A or Type B
  // This is required due to either type of component in React.
  // However, SINGLE type assignment only is recommended for good.
  public onInjection: Subject<Component | FunctionComponent> = new Subject<
    Component | FunctionComponent
  >();

  public onSubmit: Subject<T> = new Subject<T>();
  public onCancel: Subject<boolean> = new Subject<boolean>();
  public isModalOpen: boolean = false;

  // **NOTE**:
  // Double type assignemt is required due to either type of component in React.
  // However, this is not encouraged for other methods or instance types.
  public showModal(component: Component | FunctionComponent): void {
    this.isModalOpen = true;
    this.onInjection.next(component);
  }
}
