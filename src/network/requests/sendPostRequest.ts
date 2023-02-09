import axios from 'axios';
import {APIConstants, AxiosInstance} from '../config';
import handler from '../handler';

async function sendPostRequest<T>(endPoint: string, body: any) {
    try {
        let axiosInstance = await AxiosInstance();
        var apiResponse = await axiosInstance.post(
            APIConstants.BASE_URL + endPoint,
            JSON.stringify(body),
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

export default sendPostRequest;
