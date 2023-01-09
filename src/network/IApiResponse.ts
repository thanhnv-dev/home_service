export interface IApiResponse<T> extends ApiResponse {
  data?: object;
  status?: number;
}

export interface ApiResponse {
  isSuccess: boolean;
}
