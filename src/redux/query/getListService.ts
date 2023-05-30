import {createApi} from '@reduxjs/toolkit/query/react';
import {ServiceItem} from 'src/network/apiResponses/service';
import {axiosGetBaseQueryRTK} from 'src/network/requests';

export const getListService = createApi({
    reducerPath: 'queryListService',
    baseQuery: axiosGetBaseQueryRTK(),
    endpoints: builder => ({
        SvGetListService: builder.query<ServiceItem[], void>({
            query: () => ({url: '/services/get-list-services'}),
        }),
    }),
});
export const {useSvGetListServiceQuery, usePrefetch} = getListService;
