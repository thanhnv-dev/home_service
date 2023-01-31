import {IApiResponse} from '../../../network/IApiResponse';
import {UserResponse} from '../../../network/apiResponses/user';
import {SignUpService, SignInService, GetProfileService} from '../application';
import {
  signUp,
  signIn,
  getProfile,
} from '../../../network/controllers/userControllers';

export class UserSignUpService implements SignUpService {
  async signUp(data: object): Promise<IApiResponse<UserResponse>> {
    const signUpResult: IApiResponse<UserResponse> = await signUp(data);
    return signUpResult;
  }
}
export class UserSignInService implements SignInService {
  async signIn(data: object): Promise<IApiResponse<UserResponse>> {
    const signInResult: IApiResponse<UserResponse> = await signIn(data);
    return signInResult;
  }
}
export class UserGetProfileService implements GetProfileService {
  async getProfile(data: object): Promise<IApiResponse<UserResponse>> {
    const getProfileResult: IApiResponse<UserResponse> = await getProfile(data);
    return getProfileResult;
  }
}
