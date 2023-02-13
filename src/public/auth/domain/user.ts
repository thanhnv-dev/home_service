export interface IUser {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
    type: string;
    token: string;
    refreshToken: string;
    image: string;
}

// export class User {
//   _id: string;
//   _email: string;
//   _firstName: string;
//   _lastName: string;
//   _type: string;
//   _token: string;
//   _refreshToken: string;

//   constructor(
//     _id: string,
//     firstName: string,
//     lastName: string,
//     email: string,
//     type: string,
//     token: string,
//     refreshToken: string,
//   ) {
//     this._id = _id;
//     this._firstName = firstName;
//     this._email = email;
//     this._lastName = lastName;
//     this._type = type;
//     this._token = token;
//     this._refreshToken = refreshToken;
//   }

//   get id(): string {
//     return this._id;
//   }
//   get firstName(): string {
//     return this._firstName;
//   }
//   get lastName(): string {
//     return this._lastName;
//   }
//   get email(): string {
//     // return this._email;
//     return 'x';
//   }
//   get type(): string {
//     return this._type;
//   }
//   get token(): string {
//     return this._token;
//   }
//   get refreshToken(): string {
//     return this._refreshToken;
//   }
// }
