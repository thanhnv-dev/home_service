import {sendGetRequest} from '../index';
import {ServiceListItem} from '../apiResponses/service';

export const getService = async () => {
  return await sendGetRequest<ServiceListItem>('/services/get-list-services');
};
