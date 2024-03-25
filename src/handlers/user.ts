import "server-only";

import {redirect} from "next/navigation";
import {z} from "zod";

import {getUserProfileByEmail} from "@/db/queries/user/q";
import {getSession} from "@/lib/session";

export async function loggedInOrRedirect() {
  let session = await getSession();
  if (!session) {
    redirect("/login");
  }
  return session;
}

export async function getProfile() {
  let session = await loggedInOrRedirect();
  let result = sessionSchema.safeParse(session);
  if (!result.success) {
    throw new Error("Invalid session");
  }
  let {data} = result;
  let user = await getUserProfileByEmail(data.email);

  if (!user) {
    redirect("/login");
  }
  return user;
}

let sessionSchema = z.object({
  email: z.string(),
  expires: z.string(),
  iat: z.number(),
  exp: z.number(),
});
