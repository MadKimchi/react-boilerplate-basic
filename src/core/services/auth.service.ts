import axios, { AxiosResponse } from 'axios';
import { from, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { InjectorService } from './injector.service';
import { UserService } from './user.service';
import { BaseURLEnum } from '../enums';

export class AuthService {
  public onLogin: Subject<boolean> = new Subject<boolean>();
  private readonly _authBaseUrl = `${BaseURLEnum.appService}/auth`;
  private _userService: UserService;

  constructor(private _context: InjectorService) {
    this._userService = _context.userService;
  }

  // TODO: define the user object by either class or interface
  public signIn(payload: {
    email: string;
    password: string;
  }): Observable<boolean> {
    return from(axios.post(`${this._authBaseUrl}/login`, payload)).pipe(
      map((response: AxiosResponse) => {
        if (response.status === 201) {
          this.onLogin.next(true);
          return true;
        }

        return false;
      })
    );
  }
}
