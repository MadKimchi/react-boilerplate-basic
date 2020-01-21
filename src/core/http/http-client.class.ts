import { Observable, from } from 'rxjs';
import Axios, { AxiosInstance, AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';
import { RequestAuthInterceptor } from './interceptors/request.interceptor';

export class HttpClient {
  private _client: AxiosInstance;

  constructor() {
    this._client = Axios.create({});
  }

  public get<T>(url: string): Observable<T> {
    return from(this._client.get(url)).pipe(
      map((response: AxiosResponse<T>) => response.data)
    );
  }

  public put<P, T>(url: string, payload: P): Observable<T> {
    return from(this._client.put(url, payload)).pipe(
      map((response: AxiosResponse<T>) => response.data)
    );
  }

  public post<P, T>(url: string, payload: P): Observable<T> {
    return from(this._client.post(url, payload)).pipe(
      map((response: AxiosResponse<T>) => response.data)
    );
  }

  public delete<P, T>(url: string, payload: P): Observable<T> {
    return from(this._client.delete(url, payload)).pipe(
      map((response: AxiosResponse<T>) => response.data)
    );
  }

  public patch<P, T>(url: string, payload: P): Observable<T> {
    return from(this._client.patch(url, payload)).pipe(
      map((response: AxiosResponse<T>) => response.data)
    );
  }

  // public setAuthInterceptor(jwt: string): void {
  //   this._client.interceptors.request.use((request: Request) =>
  //     RequestAuthInterceptor(request, jwt)
  //   );
  // }
}
