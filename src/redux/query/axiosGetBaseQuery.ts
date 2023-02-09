import {AxiosError} from 'axios';
import type {BaseQueryFn} from '@reduxjs/toolkit/query';
import {sendGetRequest} from '~/network/requests';

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
export default axiosGetBaseQuery;
