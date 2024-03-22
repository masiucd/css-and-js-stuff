import {redirect} from "next/navigation";
import {z} from "zod";

import {PageWrapper} from "@/components/page-wrapper";
import {H1} from "@/components/typography";
import {getUserProfileByEmail} from "@/db/queries/user/q";
import {getSession} from "@/lib/session";

export default async function ProfilePage() {
  let user = await getProfile();
  return (
    <PageWrapper>
      <H1>
        Welcome, {user.first} {user.last}
      </H1>
    </PageWrapper>
  );
}

async function getProfile() {
  let session = await getSession();
  if (!session) {
    redirect("/login");
  }
  let result = sessionSchema.safeParse(session);
  if (!result.success) {
    throw new Error("Invalid session");
  }
  let {data} = result;
  let user = await getUserProfileByEmail(data.email);
  if (!user) {
    throw new Error("User not found");
  }
  return user;
}

let sessionSchema = z.object({
  email: z.string(),
  expires: z.string(),
  iat: z.number(),
  exp: z.number(),
});
