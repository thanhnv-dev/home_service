import {IApiResponse} from '../../../network/apiResponses/IApiResponse';
import {UserResponse} from '../../../network/apiResponses/user';
import {
    getProfile,
    signIn,
    signUp,
} from '../../../network/controllers/userControllers';
import {GetProfileService, SignInService, SignUpService} from '../application';

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
        const getProfileResult: IApiResponse<UserResponse> = await getProfile(
            data,
        );
        return getProfileResult;
    }
}
