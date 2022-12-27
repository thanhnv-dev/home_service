import {IApiResponse} from '../../../network/IApiResponse';
import {SignUpResponse} from '../../../network/apiResponses/user';
import {SignUpService} from '../application';
import {signUp} from '../../../network/controllers/userControllers';

export class UserService implements SignUpService {
  async signUp(): Promise<IApiResponse<SignUpResponse>> {
    const signUpResult: IApiResponse<SignUpResponse> = await signUp();
    return signUpResult;
  }
}
