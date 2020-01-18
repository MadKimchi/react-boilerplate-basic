import H, { LocationState } from 'history';
import { RouteEnum } from '../enums';
import { InjectorService } from './injector.service';
import { AuthService } from './auth.service';

export class RouteService {
  private _authService: AuthService;
  constructor(private _context: InjectorService) {
    this._authService = this._context.authService;
  }

  // should not provide a way to access history directly.
  // encapsulate the layer so you can add more protective way.
  // therefore, no getter is provider for the history object.
  private _history!: H.History<LocationState>; // prettier-ignore
  public set history(history: H.History<LocationState>) {
    if (!this._history) {
      this._history = history;
    }
  }

  // TODO: add more conditions
  public navigate(path: RouteEnum, checkAuth: boolean = false): void {
    // TODO: you can add more logic to this
    if (checkAuth && !this._authService.isLoggedIn) {
      this._history.push(`/${RouteEnum.login}`);
    }
    this._history.push(`/${path}`);
  }

  public goBack(): void {
    this._history.goBack();
  }

  public goForward(): void {
    this._history.goForward();
  }
}
