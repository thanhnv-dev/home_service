import {sendPostRequest} from '../index';
import {UserResponse} from '../apiResponses/user';

export const signUp = async (body: object) => {
    return await sendPostRequest<UserResponse>('/users/signup', body);
};
export const signIn = async (body: object) => {
    return await sendPostRequest<UserResponse>('/users/signin', body);
};
export const getProfile = async (body: object) => {
    return await sendPostRequest<UserResponse>('/users/getprofile', body);
};
