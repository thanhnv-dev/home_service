export interface IApiResponse<T> extends ApiResponse {
  msg: string;
  data?: object;
  status?: number;
}

export interface ApiResponse {
  isSuccess: boolean;
}
