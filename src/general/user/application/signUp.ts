import {UserResponse} from '../../../network/apiResponses/user';
import {IApiResponse} from '../../../network/IApiResponse';

export interface SignUpService {
  signUp: (data: object) => Promise<IApiResponse<UserResponse>>;
}

export class SignUp {
  signUpService: SignUpService;

  constructor(signUpService: SignUpService) {
    this.signUpService = signUpService;
  }

  async fetchUser(data: object): Promise<IApiResponse<UserResponse>> {
    return this.signUpService.signUp(data);
  }
}
