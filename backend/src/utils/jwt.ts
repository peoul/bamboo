import config from "#config/environment.js";
import { SignJWT, jwtVerify } from "jose";

const secret = new TextEncoder().encode(config.jwtSecret)

export async function createToken(payload: {userId: number, email: string}){
    const token = await new SignJWT(payload)
    .setProtectedHeader({alg: 'HS256'})
    .setIssuedAt()
    .setExpirationTime('2h')
    .sign(secret)

    return token
}

export async function verifyToken(token:string) {
    try{
        const {payload} = await jwtVerify(token, secret)

        return payload as { userId: number, email: string }

    } catch(e){
        throw new Error("Invalid token")
    }
}