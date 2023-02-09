import {sendGetRequest} from '../requests';
import {ServiceItem} from '../apiResponses/service';

export const getService = async () => {
    return await sendGetRequest<ServiceItem[]>('/services/get-list-services');
};
