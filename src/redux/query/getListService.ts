import {createApi} from '@reduxjs/toolkit/query/react';
import {ServiceItem} from '~/network/apiResponses/service';
import axiosGetBaseQuery from './axiosGetBaseQuery';

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
