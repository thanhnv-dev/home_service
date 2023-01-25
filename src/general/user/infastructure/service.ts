import {IApiResponse} from '../../../network/IApiResponse';
import {
  SignUpResponse,
  SignInResponse,
} from '../../../network/apiResponses/user';
import {SignUpService, SignInService, GetProfileService} from '../application';
import {
  signUp,
  signIn,
  getProfile,
} from '../../../network/controllers/userControllers';

export class UserSignUpService implements SignUpService {
  async signUp(data: object): Promise<IApiResponse<SignUpResponse>> {
    const signUpResult: IApiResponse<SignUpResponse> = await signUp(data);
    return signUpResult;
  }
}
export class UserSignInService implements SignInService {
  async signIn(data: object): Promise<IApiResponse<SignInResponse>> {
    const signInResult: IApiResponse<SignInResponse> = await signIn(data);
    return signInResult;
  }
}
export class UserGetProfileService implements GetProfileService {
  async getProfile(data: object): Promise<IApiResponse<SignInResponse>> {
    const getProfileResult: IApiResponse<SignInResponse> = await getProfile(
      data,
    );
    return getProfileResult;
  }
}
