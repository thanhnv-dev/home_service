import {IApiResponse} from '../apiResponses/IApiResponse';
import helper from 'src/utils/helper';

function Response<T>(apiResponse: any) {
    let res: IApiResponse<T> = {
        isSuccess: true,
        data: apiResponse.data,
        status: apiResponse.status,
    };
    return res;
}
function Error<T>(apiResponse: any) {
    let res: IApiResponse<T> = {
        isSuccess: false,
        data: apiResponse.data,
        status: apiResponse.status,
    };
    helper.showToast({msg: apiResponse.data.msg, type: 'error'});
    return res;
}

function NetworkError<T>(apiResponse: any) {
    let res: IApiResponse<T> = {
        isSuccess: false,
    };
    helper.showToast({
        msg: `${apiResponse.message}/ Service error`,
        type: 'error',
    });
    return res;
}

export default {Response, Error, NetworkError};
