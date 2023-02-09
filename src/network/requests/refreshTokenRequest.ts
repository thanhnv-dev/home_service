import AsyncStorage from '@react-native-async-storage/async-storage';
import {refreshTokenResponse} from '../apiResponses/refreshToke';
import sendPostRequest from './sendPostRequest';

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
export default refreshTokenRequest;
