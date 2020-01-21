import { AxiosResponse, AxiosError } from 'axios';
import { Subject } from 'rxjs';

export function ResponseHandleInterceptor(
  response: AxiosResponse
): AxiosResponse {
  console.log(response);
  // TODO: if needed, do some logic here
  return response;
}

export function ReponseErrorHandleInterceptor(
  error: AxiosError,
  errorSubject: Subject<AxiosError>
): void {
  // TODO: error message mapping here by status code or by error message key
  console.log(error);
  // throw new Error('Error!!');
  // throw new Error('Error!!');
  errorSubject.next(error);
}
