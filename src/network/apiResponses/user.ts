// import {User} from '../../card/domain';

export interface User {
  email: string;
  password: string;
}

export interface SignUp {
  signUp: User;
}

export interface SignUpResponse {
  data: SignUp;
}
