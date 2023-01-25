import {SignInResponse} from '../../../network/apiResponses/user';
import {IApiResponse} from '../../../network/IApiResponse';

export interface GetProfileService {
  getProfile: (data: object) => Promise<IApiResponse<SignInResponse>>;
}

export class GetProfile {
  getProfileService: GetProfileService;

  constructor(signIpService: GetProfileService) {
    this.getProfileService = signIpService;
  }

  async getProfileUser(data: object): Promise<IApiResponse<SignInResponse>> {
    return this.getProfileService.getProfile(data);
  }
}
