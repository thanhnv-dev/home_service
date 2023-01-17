export interface UserInterface {
  _id: string;
  _email: string;
  _firstName: string;
  _lastName: string;
  _type: string;
  _token: string;
  _refreshToken: string;
}

export class User implements UserInterface {
  _id: string;
  _email: string;
  _firstName: string;
  _lastName: string;
  _type: string;
  _token: string;
  _refreshToken: string;

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    type: string,
    token: string,
    refreshToken: string,
  ) {
    this._id = id;
    this._firstName = firstName;
    this._email = email;
    this._lastName = lastName;
    this._type = type;
    this._token = token;
    this._refreshToken = refreshToken;
  }

  get name(): string {
    return this._email;
  }
}
