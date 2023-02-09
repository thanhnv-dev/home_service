import axios from 'axios';
import {APIConstants, AxiosInstance} from '../config';
import handler from '../handler';

async function sendGetRequest<T>(endPoint: string) {
    try {
        let axiosInstance = await AxiosInstance();
        var apiResponse = await axiosInstance.get(
            APIConstants.BASE_URL + endPoint,
        );
        return handler.Response<T>(apiResponse);
    } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
            return handler.Error<T>(err.response);
        } else {
            return handler.NetworkError<T>(err);
        }
    }
}
export default sendGetRequest;
