import {IApiResponse} from '../../../network/IApiResponse';
import {SignUpResponse} from '../../../network/apiResponses/user';
import {SignUpService} from '../application';
import {createUser} from '../../../network/controllers/userControllers';

export class SignUp implements SignUpService {
  async signUp(): Promise<IApiResponse<SignUpResponse>> {
    const signUpResult: IApiResponse<SignUpResponse> = await createUser();
    return signUpResult;
  }
}
