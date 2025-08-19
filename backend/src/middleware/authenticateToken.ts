import { verifyToken } from "#utils/jwt.js";
import { Response, NextFunction } from "express";
import { AuthenticatedRequest } from "#types/auth.type.js";
export const authenticateToken =  async( req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization;

        const token = authHeader && authHeader.split(' ')[1] //Beaer Token

        if(!token){
            return res.status(401).json({error: 'Access Token Required'})
        }

        const payload = await verifyToken(token)

        req.user = payload;

        next();


    } catch(e) {
        res.status(403).json({error: 'Invalid or Expired Token'})
    }
}