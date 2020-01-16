import { InjectorService } from './injector.service';

// import axios, { AxiosResponse } from 'axios';
// import { from, Observable, Subject } from 'rxjs';
// import { map } from 'rxjs/operators';

export class UserService {
  private _user: any;
  public get user(): any {
    if (!this._user) {
      this._user = localStorage.getItem('user');
    }

    return this._user;
  }

  constructor(private _context: InjectorService) {}

  // // TODO: define the user object by either class or interface
  // public signIn(): Observable<any> {
  //   const credentials = {
  //     email: 'christie@email.com',
  //     password: '12345678'
  //   };
  //   return from(
  //     axios.post('http://localhost:4000/auth/login', credentials)
  //   ).pipe(
  //     map((response: AxiosResponse) => {
  //       if (response.status === 201) {
  //         this.onLogin.next(true);
  //         return response.data.payload;
  //       }

  //       return null;
  //     })
  //   );
  // }
}
