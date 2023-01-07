import {sendPostRequest} from '../index';
import {SignUpResponse, SignInResponse} from '../apiResponses/user';

export const signUp = async (body: any) => {
  return await sendPostRequest<SignUpResponse>('/users/signup', body);
};
export const signIn = async (body: any) => {
  return await sendPostRequest<SignInResponse>('/users/signin', body);
};
