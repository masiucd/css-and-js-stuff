"use server";
import "server-only";

import {jwtVerify, SignJWT} from "jose";

let key = new TextEncoder().encode(process.env.JWT_SECRET!);

export async function encrypt(payload: {email: string; expires: Date}) {
  return await new SignJWT(payload)
    .setProtectedHeader({alg: "HS256"})
    .setIssuedAt()
    .setExpirationTime(payload.expires)
    .sign(key);
}

export async function decrypt(token: string) {
  let {payload} = await jwtVerify(token, key, {algorithms: ["HS256"]});
  return payload;
}
