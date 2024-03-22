import "server-only";

import {cookies} from "next/headers";

import {decrypt, encrypt} from "./jwt";

const sessionName = "auth-session";

export async function setSession(email: string, seconds = 3600) {
  let expires = getExpires(seconds);
  let session = await encrypt({email, expires});
  cookies().set(sessionName, session, {
    expires,
    // only readable by the server
    httpOnly: true,
  });
}
export async function getSession() {
  let session = cookies().get(sessionName)?.value;
  if (!session) return null;
  return await decrypt(session);
}

function getExpires(seconds: number = 3600): Date {
  let milliseconds = 1000;
  return new Date(Date.now() + seconds * milliseconds); // 1 hour
}

export async function destroySession() {
  cookies().delete(sessionName);
}
