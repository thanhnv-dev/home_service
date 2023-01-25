// import {User} from '~/general/user/domain';
export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  type: string;
  token: string;
  refreshToken: string;
}

export interface SignUpResponse extends User {
  msg: string;
}
export interface SignInResponse extends User {
  msg: string;
}
