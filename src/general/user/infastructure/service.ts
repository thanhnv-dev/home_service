import {IApiResponse} from '../../../network/IApiResponse';
import {
  SignUpResponse,
  SignInResponse,
} from '../../../network/apiResponses/user';
import {SignUpService, SignInService} from '../application';
import {signUp, signIn} from '../../../network/controllers/userControllers';

export class UserSignUpService implements SignUpService {
  async signUp(data: any): Promise<IApiResponse<SignUpResponse>> {
    const signUpResult: IApiResponse<SignUpResponse> = await signUp(data);
    return signUpResult;
  }
}
export class UserSignInService implements SignInService {
  async signIn(data: any): Promise<IApiResponse<SignInResponse>> {
    const signInResult: IApiResponse<SignUpResponse> = await signIn(data);
    return signInResult;
  }
}
