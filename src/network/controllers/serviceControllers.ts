import {sendGet} from '../requests';
import {ServiceItem} from '../apiResponses/service';

export const getService = async () => {
    return await sendGet<ServiceItem[]>('/services/get-list-services');
};
