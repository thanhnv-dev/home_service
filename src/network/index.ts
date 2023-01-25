import axios from 'axios';
import {showToast} from '~/utils/helper';
import {APIConstants} from './APIConstants';
import {IApiResponse} from './IApiResponse';
import AsyncStorage from '@react-native-async-storage/async-storage';

async function getAxiosInstance() {
  const token = await AsyncStorage.getItem('token');
  if (token === null) {
    //not token
  }
  const instance = axios.create({
    baseURL: APIConstants.BASE_URL,
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  return instance;
}

function handleResponse<T>(apiResponse: any) {
  let res: IApiResponse<T> = {
    isSuccess: true,
    data: apiResponse.data,
    status: apiResponse.status,
  };

  // showToast({msg: data.msg, type: 'success'});
  return res;
}

function handleError<T>(apiResponse: any) {
  let res: IApiResponse<T> = {
    isSuccess: false,
    data: apiResponse.data,
    status: apiResponse.status,
  };
  showToast({msg: apiResponse.data.msg, type: 'error'});
  return res;
}

function handleNetworkError<T>(apiResponse: any) {
  let res: IApiResponse<T> = {
    isSuccess: false,
  };
  showToast({msg: apiResponse.message, type: 'error'});
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
      return handleError<T>(err.response);
    } else {
      return handleNetworkError<T>(err);
    }
  }
}
