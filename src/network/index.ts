import axios from 'axios';
import {APIConstants} from './APIConstants';
import {IApiResponse} from './IApiResponse';
import {showToast} from '~/utils/helper';

async function getAxiosInstance() {
  const instance = axios.create({
    baseURL: APIConstants.BASE_URL,
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  return instance;
}

function handleResponse<T>(apiResponse: any) {
  let res: IApiResponse<T> = {
    isSuccess: true,
    data: apiResponse.data.data,
    status: apiResponse.status,
    msg: apiResponse.data.msg,
  };
  // showToast({msg: data.msg, type: 'success'});
  return res;
}

function handleError<T>(apiResponse: any) {
  let res: IApiResponse<T> = {
    isSuccess: false,
    data: apiResponse,
    msg: apiResponse.msg,
  };
  showToast({msg: apiResponse.msg, type: 'error'});
  return res;
}

export async function sendPostRequest<T>(endPoint: string, body: any) {
  try {
    let axiosInstance = await getAxiosInstance();
    var apiResponse = await axiosInstance.post(
      APIConstants.BASE_URL + endPoint,
      JSON.stringify(body),
    );
    return handleResponse<T>(apiResponse);
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      return handleError<T>(err.response?.data);
    } else {
      return handleError<T>(err);
    }
  }
}
