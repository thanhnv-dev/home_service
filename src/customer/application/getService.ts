import {ServiceItem} from '~/network/apiResponses/service';
import {IApiResponse} from '~/network/IApiResponse';

export interface GetListService {
  getService: () => Promise<IApiResponse<ServiceItem[]>>;
}

export class GetService {
  getListService: GetListService;

  constructor(getListService: GetListService) {
    this.getListService = getListService;
  }

  async getService(): Promise<IApiResponse<ServiceItem[]>> {
    return this.getListService.getService();
  }
}
