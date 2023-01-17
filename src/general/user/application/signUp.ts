import {SignUpResponse} from '../../../network/apiResponses/user';
import {IApiResponse} from '../../../network/IApiResponse';

export interface SignUpService {
  signUp: (data: object) => Promise<IApiResponse<SignUpResponse>>;
}

export class SignUp {
  signUpService: SignUpService;

  constructor(signUpService: SignUpService) {
    this.signUpService = signUpService;
  }

  async fetchUser(data: object): Promise<IApiResponse<SignUpResponse>> {
    return this.signUpService.signUp(data);
  }
}
