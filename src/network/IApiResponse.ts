export interface IApiResponse<T> extends ApiResponse {
  data?: T;
  msg?: T;
}

export interface ApiResponse {
  isSuccess: boolean;
  errors?: Error;
}
