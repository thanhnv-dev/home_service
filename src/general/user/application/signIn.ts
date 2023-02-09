import {UserResponse} from '../../../network/apiResponses/user';
import {IApiResponse} from '../../../network/apiResponses/IApiResponse';

export interface SignInService {
    signIn: (data: object) => Promise<IApiResponse<UserResponse>>;
}

export class SignIn {
    signInService: SignInService;

    constructor(signIpService: SignInService) {
        this.signInService = signIpService;
    }

    async fetchUser(data: object): Promise<IApiResponse<UserResponse>> {
        return this.signInService.signIn(data);
    }
}
