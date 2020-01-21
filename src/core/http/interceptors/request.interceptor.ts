export function RequestAuthInterceptor(request: Request, jwt: string): Request {
  request.headers.append('Authorization', `Bearer ${jwt}`);
  return request;
}
