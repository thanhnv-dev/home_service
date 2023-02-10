import {sendPost} from '../requests';
import {UserResponse} from '../apiResponses/user';

export const signUp = async (body: object) => {
    return await sendPost<UserResponse>('/users/signup', body);
};
export const signIn = async (body: object) => {
    return await sendPost<UserResponse>('/users/signin', body);
};
export const getProfile = async (body: object) => {
    return await sendPost<UserResponse>('/users/getprofile', body);
};
