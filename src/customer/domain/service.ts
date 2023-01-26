export interface ServiceInterface {
  _id: string;
  _serviceName: string;
  _image: string;
}

export class Service implements ServiceInterface {
  _id: string;
  _serviceName: string;
  _image: string;

  constructor(id: string, serviceName: string, image: string) {
    this._id = id;
    this._serviceName = serviceName;
    this._image = image;
  }

  get name(): string {
    return this._serviceName;
  }
}
