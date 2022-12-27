import axios from 'axios';
import {APIConstants} from './APIConstants';
import {IApiResponse} from './IApiResponse';
import Toast from 'react-native-toast-message';

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

function showToast({msg, type}: {msg: string; type: string}) {
  Toast.show({
    type: type,
    text1: msg,
  });
}

function handleResponse<T>(data: any) {
  console.log(true);

  let res: IApiResponse<T> = {
    isSuccess: true,
    errors: undefined,
    data: data.data as T,
    msg: data.msg as T,
  };
  showToast({msg: data.msg, type: 'success'});
  return res;
}

function handleError<T>(data: any) {
  let res: IApiResponse<T> = {
    isSuccess: false,
    errors: data,
    data: undefined,
    msg: data.msg as T,
  };
  showToast({msg: data.msg, type: 'error'});
  return res;
}

export async function sendPostRequest<T>(endPoint: string, body: any) {
  try {
    let axiosInstance = await getAxiosInstance();
    var apiResponse = await axiosInstance.post(
      APIConstants.BASE_URL + endPoint,
      JSON.stringify(body),
    );
    if (apiResponse?.status === 200) {
      //Success
      return handleResponse<T>(apiResponse.data);
    } else {
      //fail
      return handleError<T>(apiResponse.data);
    }
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      return handleError(err.response?.data);
    }
  }
}
