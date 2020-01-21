export interface IDRequestSignIn {
  email: string;
  password: string;
}

export interface IDResponseSignIn {
  expires_in: number;
  access_token: string;
}
