export interface ResponseMeta {
  requestId: string;
  requestTime: string;
  responseTime: string;
  durationMs: number;
}

export interface ApiSuccessResponse<T = any> {
  data: T;
  meta: ResponseMeta;
}

export interface ApiErrorResponse {
  error: {
    code: number;
    message: string;
    [key: string]: any;
  };
  meta: ResponseMeta;
}
