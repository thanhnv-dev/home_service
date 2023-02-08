export interface IApiResponse<T> extends ApiResponse {
    data?: T;
}

export interface ApiResponse {
    isSuccess: boolean;
    status?: number;
}
