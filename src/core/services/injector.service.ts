import { AuthService } from './auth.service';

export class InjectorService {
  // TODO: disable prettier for definite assignment assertion if the prettier community does not fix this
  // Resources:
  // https://palantir.github.io/tslint/rules/no-non-null-assertion/
  // https://stackoverflow.com/questions/42273853/in-typescript-what-is-the-exclamation-mark-bang-operator-when-dereferenci
  // https://mariusschulz.com/blog/strict-property-initialization-in-typescript
  // http://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html
  private _authService!: AuthService; // prettier-ignore

  public get authService(): AuthService {
    if (!this._authService!) {
      this._authService = new AuthService();
    }

    return this._authService;
  }
}