import { Subject } from 'rxjs';

export class ErrorService {
  public onError: Subject<any> = new Subject<any>();
}
