import { JwtPayload, verify } from 'jsonwebtoken';
const secretToken = process.env.SECRET_TOKEN

export const verifyTokenAndGetPayload = (token: string): JwtPayload | null => {
  try {
    const decoded = verify(token, String(secretToken));
    return decoded as JwtPayload; // Type assertion para JwtPayload
  } catch (error) {
    return null;
  }
};

export const isJwtPayload = (user: any): user is JwtPayload => {
  return (user as JwtPayload)?.id !== undefined;
};