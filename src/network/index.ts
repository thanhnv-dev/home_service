import axios, {AxiosError} from 'axios';
import {showToast} from '~/utils/helper';
import {APIConstants} from './APIConstants';
import {IApiResponse} from './IApiResponse';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {refreshTokenResponse} from './apiResponses/refreshToke';
import {createApi} from '@reduxjs/toolkit/query/react';
import type {BaseQueryFn} from '@reduxjs/toolkit/query';
import {ServiceItem} from '~/network/apiResponses/service';

async function getAxiosInstance() {
    const instance = axios.create({
        baseURL: APIConstants.BASE_URL,
        timeout: 30000,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    });

    instance.interceptors.request.use(
        async (config: any) => {
            const token = await AsyncStorage.getItem('token');
            if (token) {
                config.headers.Authorization = 'Bearer ' + token;
            }
            return config;
        },
        error => {
            return Promise.reject(error);
        },
    );

    instance.interceptors.response.use(
        res => {
            return res;
        },
        async err => {
            const originalConfig = err.config;
            if (originalConfig.url !== '/auth/signin' && err.response) {
                if (err.response.status === 401 && !originalConfig._retry) {
                    originalConfig._retry = true;
                    try {
                        const callRefreshTokenRequest =
                            await refreshTokenRequest();
                        const newToken = callRefreshTokenRequest.data?.token!;
                        await AsyncStorage.setItem('token', newToken);
                        return instance(originalConfig);
                    } catch (_error) {
                        return Promise.reject(_error);
                    }
                }
            }
            return Promise.reject(err);
        },
    );
    return instance;
}

function handleResponse<T>(apiResponse: any) {
    let res: IApiResponse<T> = {
        isSuccess: true,
        data: apiResponse.data,
        status: apiResponse.status,
    };
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
    showToast({msg: `${apiResponse.message}/ Service error`, type: 'error'});
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
export async function sendGetRequest<T>(endPoint: string) {
    try {
        let axiosInstance = await getAxiosInstance();
        var apiResponse = await axiosInstance.get(
            APIConstants.BASE_URL + endPoint,
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
async function refreshTokenRequest() {
    const refreshToken = await AsyncStorage.getItem('refreshToken');
    const _id = await AsyncStorage.getItem('_id');

    const refresh = await sendPostRequest<refreshTokenResponse>(
        '/users/refreshToken',
        {
            refreshToken: refreshToken,
            _id: _id,
        },
    );
    return refresh;
}

const axiosGetBaseQuery =
    (): BaseQueryFn<
        {
            url: string;
        },
        unknown,
        unknown
    > =>
    async ({url}) => {
        try {
            const result = await sendGetRequest(url);
            return {data: result.data};
        } catch (axiosError) {
            let err = axiosError as AxiosError;
            return {
                error: {
                    status: err.response?.status,
                    data: err.response?.data || err.message,
                },
            };
        }
    };

export const getListService = createApi({
    reducerPath: 'queryListService',
    baseQuery: axiosGetBaseQuery(),
    endpoints: builder => ({
        SvGetListService: builder.query<ServiceItem[], void>({
            query: () => ({url: '/services/get-list-services'}),
        }),
    }),
});
export const {useSvGetListServiceQuery} = getListService;
