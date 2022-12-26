import {CREATE_USER} from './query';
import {sendPostRequest} from '../index';
import {SignUpResponse} from '../apiResponses/user';

export const createUser = async () => {
  return await sendPostRequest<SignUpResponse>(CREATE_USER);
};
