import {ServiceListItem} from '~/network/apiResponses/service';
import {IApiResponse} from '~/network/IApiResponse';

export interface GetListService {
  getService: () => Promise<IApiResponse<ServiceListItem>>;
}

export class GetService {
  getListService: GetListService;

  constructor(getListService: GetListService) {
    this.getListService = getListService;
  }

  async getService(): Promise<IApiResponse<ServiceListItem>> {
    return this.getListService.getService();
  }
}
