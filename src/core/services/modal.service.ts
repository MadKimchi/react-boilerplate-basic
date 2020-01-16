import { Subject } from 'rxjs';
import { Component, FunctionComponent } from 'react';

export class ModalService<T> {
  // one of the few exceptions to accommodate Type A or Type B. Single type assignment is recommended.
  public onInjection: Subject<Component | FunctionComponent> = new Subject<
    Component | FunctionComponent
  >();

  // payload type T
  public onSubmit: Subject<T> = new Subject<T>();
  public onCancel: Subject<boolean> = new Subject<boolean>();
}
