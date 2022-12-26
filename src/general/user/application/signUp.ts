import {SignUpResponse} from '../../../network/apiResponses/user';
import {IApiResponse} from '../../../network/IApiResponse';

export interface SignUpService {
  signUp: () => Promise<IApiResponse<SignUpResponse>>;
}

export class SignUp {
  signUpService: SignUpService;

  constructor(signUpService: SignUpService) {
    this.signUpService = signUpService;
  }

  async fetchUser(): Promise<IApiResponse<SignUpResponse>> {
    return this.signUpService.signUp();
  }
}
