import { Request } from "express";

export interface AuthenticatedRequest extends Request {
  user: {
    userId: number;
    email: string;
    iat?: number; // Optional: issued at timestamp
    exp?: number; // Optional: expiration timestamp
  };
}
