import axios, { AxiosResponse } from 'axios';
import { from, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

export class LanguageService {
  public onLogin: Subject<boolean> = new Subject<boolean>();

  constructor(context: any) {}

  // TODO: define the user object by either class or interface
  public signIn(): Observable<any> {
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
