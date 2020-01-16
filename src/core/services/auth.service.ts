import axios, { AxiosResponse } from 'axios';
import { from, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { InjectorService } from './injector.service';
import { UserService } from './user.service';

export class AuthService {
  public onLogin: Subject<boolean> = new Subject<boolean>();
  private _userService: UserService;

  constructor(private _context: InjectorService) {
    console.log(_context.userService);
    // console.log(_context.userService);
    this._userService = _context.userService;
    console.log(_context.userService);
    console.log(_context);
  }

  // TODO: define the user object by either class or interface
  public signIn(): Observable<any> {
    console.log(this._userService);
    const credentials = {
      email: 'christie@email.com',
      password: '12345678'
    };
    return from(
      axios.post('http://localhost:4000/auth/login', credentials)
    ).pipe(
      map((response: AxiosResponse) => {
        if (response.status === 201) {
          this.onLogin.next(true);
          return response.data.payload;
        }

        return null;
      })
    );
  }
}
