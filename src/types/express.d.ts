import 'express';

declare global {
  namespace Express {
    interface Request {
      requestId: string;
      requestTime: string;
      requestStartTime: number;
    }
  }
}
