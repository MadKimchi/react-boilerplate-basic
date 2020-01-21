import { InjectorService } from './injector.service';
import { BaseURLEnum } from '../enums';
import { Observable, of } from 'rxjs';
import { HttpClient } from '../http/http-client.class';

export class BaseDataService {
  protected _baseUrl: BaseURLEnum = BaseURLEnum.appService;

  constructor(protected _httpClient: HttpClient) {}
}
