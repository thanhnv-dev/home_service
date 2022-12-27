import {sendPostRequest} from '../index';
import {SignUpResponse} from '../apiResponses/user';

export const signUp = async (body: any) => {
  return await sendPostRequest<SignUpResponse>('/users/signup', body);
};
