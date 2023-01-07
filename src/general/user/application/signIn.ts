import {SignInResponse} from '../../../network/apiResponses/user';
import {IApiResponse} from '../../../network/IApiResponse';

export interface SignInService {
  signIn: (data: any) => Promise<IApiResponse<SignInResponse>>;
}

export class SignIn {
  signInService: SignInService;

  constructor(signIpService: SignInService) {
    this.signInService = signIpService;
  }

  async fetchUser(data: any): Promise<IApiResponse<SignInResponse>> {
    return this.signInService.signIn(data);
  }
}
