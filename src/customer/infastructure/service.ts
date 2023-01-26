import {IApiResponse} from '~/network/IApiResponse';
import {ServiceListItem} from '~/network/apiResponses/service';
import {GetListService} from '../application';
import {getService} from '~/network/controllers/serviceControllers';

export class SvGetListService implements GetListService {
  async getService(): Promise<IApiResponse<ServiceListItem>> {
    const getServiceResult: IApiResponse<ServiceListItem> = await getService();
    return getServiceResult;
  }
}
