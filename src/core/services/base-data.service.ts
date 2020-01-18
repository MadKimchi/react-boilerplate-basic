import { InjectorService } from './injector.service';
import { BaseURLEnum } from '../enums';

export class BaseDataService {
  protected _baseUrl: BaseURLEnum = BaseURLEnum.appService;
  private _httpClient: any; // TODO: define a http client

  constructor(private _context: InjectorService) {
    // this._httpClient = _context.httpClient
  }
}
