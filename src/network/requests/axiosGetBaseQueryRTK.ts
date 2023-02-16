import type {BaseQueryFn} from '@reduxjs/toolkit/query';
import {AxiosError} from 'axios';
import {sendGet} from 'src/network/requests';

const axiosGetBaseQueryRTK =
    (): BaseQueryFn<
        {
            url: string;
        },
        unknown,
        unknown
    > =>
    async ({url}) => {
        try {
            const result = await sendGet(url);
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
export default axiosGetBaseQueryRTK;
