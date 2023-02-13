import {createApi} from '@reduxjs/toolkit/query/react';
import {UserResponse} from 'src/network/apiResponses/user';
import {axiosGetBaseQueryRTK} from 'src/network/requests';

export const getProfile = createApi({
    reducerPath: 'queryListService',
    baseQuery: axiosGetBaseQueryRTK(),
    endpoints: builder => ({
        GetProfile: builder.query<UserResponse, void>({
            query: () => ({url: '/services/get-list-services'}),
        }),
    }),
});
export const {useGetProfileQuery} = getProfile;
