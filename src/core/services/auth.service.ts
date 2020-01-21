import axios, { AxiosResponse } from 'axios';
import { from, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { InjectorService } from './injector.service';
import { UserService } from './user.service';
import { BaseDataService } from './base-data.service';
import { HttpClient } from '../http/http-client.class';
import { IDSignIn } from '../http/dtos/sign-in.dto';

export class AuthService extends BaseDataService {
  public isLoggedIn: boolean = false;
  public onLogin: Subject<boolean> = new Subject<boolean>();

  // TODO: consider put baseUrl in the template file or env file and put auth as endpoint enum
  private readonly _endpoint = `${this._baseUrl}/auth`;

  constructor(_httpClient: HttpClient, private _userService: UserService) {
    super(_httpClient);
  }

  // TODO: define the user object by either class or interface and assign it to the useSerivce member
  public signIn(payload: IDSignIn): Observable<boolean> {
    return this._httpClient
      .post<IDSignIn, boolean>(`${this._endpoint}/login`, payload)
      .pipe(
        map((response: boolean) => {
          // TODO: add storageService logic and save jwt in it
          this.isLoggedIn = true;
          this.onLogin.next(true);
          return response;
        })
      );
  }
}
