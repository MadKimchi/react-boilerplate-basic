import axios, { AxiosResponse } from 'axios';
import { from, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { InjectorService } from './injector.service';
import { UserService } from './user.service';
import { BaseDataService } from './base-data.service';

export class AuthService extends BaseDataService {
  public isLoggedIn: boolean = false;
  public onLogin: Subject<boolean> = new Subject<boolean>();

  private readonly _endpoint = `${this._baseUrl}/auth`; // consider put baseUrl in the template file or env file and put auth as endpoint enum

  private _userService: UserService;

  constructor(_context: InjectorService) {
    super(_context);
    this._userService = _context.userService;
  }

  // TODO: define the user object by either class or interface and assign it to the useSerivce member
  // TODO: make a dedicated httpClient with axios and encapsulate HTTP verbs in it
  public signIn(payload: {
    email: string;
    password: string;
  }): Observable<boolean> {
    return from(axios.post(`${this._endpoint}/login`, payload)).pipe(
      map((response: AxiosResponse) => {
        if (response.status === 201) {
          // TODO: add storageService logic and save jwt in it
          this.isLoggedIn = true;
          this.onLogin.next(true);
          return true;
        }

        return false;
      })
    );
  }
}
