import "server-only";

import {cookies} from "next/headers";
import {type NextRequest, NextResponse} from "next/server";

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

export async function destroySession() {
  cookies().delete(sessionName);
}

export async function updateSession(request: NextRequest) {
  let session = request.cookies.get("session");
  if (!session) return;

  // Refresh session so it doesn't expire
  let parsed = await decrypt(session.value);
  parsed.expires = getExpires();

  let res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value: await encrypt({
      email: parsed.email as string,
      expires: parsed.expires as Date,
    }),
    httpOnly: true, // only readable by the server
    expires: parsed.expires as Date,
  });
}

function getExpires(seconds: number = 3600): Date {
  let milliseconds = 1000;
  return new Date(Date.now() + seconds * milliseconds); // 1 hour
}
