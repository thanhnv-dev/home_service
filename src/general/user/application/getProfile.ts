import {UserResponse} from '../../../network/apiResponses/user';
import {IApiResponse} from '../../../network/IApiResponse';

export interface GetProfileService {
    getProfile: (data: object) => Promise<IApiResponse<UserResponse>>;
}

export class GetProfile {
    getProfileService: GetProfileService;

    constructor(signIpService: GetProfileService) {
        this.getProfileService = signIpService;
    }

    async getProfileUser(data: object): Promise<IApiResponse<UserResponse>> {
        return this.getProfileService.getProfile(data);
    }
}
