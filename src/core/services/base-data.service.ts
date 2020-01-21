import { BaseURLEnum } from '../enums';
import { HttpClient } from '../http/http-client.class';

export class BaseDataService {
  protected _baseUrl: BaseURLEnum = BaseURLEnum.appService;

  constructor(protected _httpClient: HttpClient) {}
}
