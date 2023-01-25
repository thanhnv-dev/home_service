import {sendPostRequest} from '../index';
import {SignUpResponse, SignInResponse} from '../apiResponses/user';

export const signUp = async (body: object) => {
  return await sendPostRequest<SignUpResponse>('/users/signup', body);
};
export const signIn = async (body: object) => {
  return await sendPostRequest<SignInResponse>('/users/signin', body);
};
export const getProfile = async (body: object) => {
  return await sendPostRequest<SignInResponse>('/users/getprofile', body);
};
