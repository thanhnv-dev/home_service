import {IApiResponse} from '~/network/IApiResponse';
import {ServiceItem} from '~/network/apiResponses/service';
import {GetListService} from '../application';
import {getService} from '~/network/controllers/serviceControllers';

export class SvGetListService implements GetListService {
  async getService(): Promise<IApiResponse<ServiceItem[]>> {
    const getServiceResult: IApiResponse<ServiceItem[]> = await getService();
    return getServiceResult;
  }
}
