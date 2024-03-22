import "server-only";

import {getSession} from "./session";

export async function isLoggedIn() {
  let session = await getSession();
  if (!session) return false;

  return true;
}
