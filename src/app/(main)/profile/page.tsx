import {redirect} from "next/navigation";
import {z} from "zod";

import {getSession} from "@/lib/session";

let sessionSchema = z.object({
  email: z.string(),
  expires: z.string(),
  iat: z.number(),
  exp: z.number(),
});

export default async function ProfilePage() {
  let session = await getSession();
  if (!session) {
    redirect("/login");
  }
  let result = sessionSchema.safeParse(session);
  if (!result.success) {
    throw new Error("Invalid session");
  }

  return <div>ProfilePage</div>;
}
