import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { LanguageService } from './language.service';
import { ModalService } from './modal.service';

export class InjectorService {
  // TODO: disable prettier for definite assignment assertion if the prettier community does not fix this
  // Resources:
  // https://palantir.github.io/tslint/rules/no-non-null-assertion/
  // https://stackoverflow.com/questions/42273853/in-typescript-what-is-the-exclamation-mark-bang-operator-when-dereferenci
  // https://mariusschulz.com/blog/strict-property-initialization-in-typescript
  // http://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html
  private _authService!: AuthService; // prettier-ignore
  public get authService(): AuthService {
    if (!this._authService) {
      this._authService = new AuthService(this);
    }

    return this._authService;
  }

  private _userService!: UserService; // prettier-ignore
  public get userService(): UserService {
    if (!this._userService) {
      this._userService = new UserService(this);
    }

    return this._userService;
  }

  private _languageService!: LanguageService; // prettier-ignore
  public get languageService(): LanguageService {
    if (!this._languageService) {
      this._languageService = new LanguageService(this);
    }

    return this._languageService;
  }

  // TODO: Move this to UIContext and all the other as DataContext
  private _modalService!: ModalService<any>; // prettier-ignore
  public get modalService(): ModalService<any> {
    if (!this._modalService) {
      this._modalService = new ModalService<any>();
    }

    return this._modalService;
  }
}
