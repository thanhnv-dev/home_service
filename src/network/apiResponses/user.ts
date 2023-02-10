import {IUser} from 'src/general/user/domain';
// export interface User {
//   _id: string;
//   firstName: string;
//   lastName: string;
//   email: string;
//   type: string;
//   token: string;
//   refreshToken: string;
// }

export interface UserResponse extends IUser {
    msg: string;
}
