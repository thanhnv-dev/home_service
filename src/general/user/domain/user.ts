export interface UserInterface {
  _id: string;
  _name: string;
  _password: string;
  _email: string;
}

export class User implements UserInterface {
  _id: string;
  _name: string;
  _password: string;
  _email: string;

  constructor(id: string, name: string, password: string, email: string) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._password = password;
  }

  get name(): string {
    return this._name;
  }
}
