import {redirect} from "next/navigation";
import {z} from "zod";

import {PageWrapper} from "@/components/page-wrapper";
import {H1} from "@/components/typography";
import {getUserProfileByEmail} from "@/db/queries/user/q";
import {getSession} from "@/lib/session";

import {logout} from "./actions";

export default async function ProfilePage() {
  let user = await getProfile();
  return (
    <PageWrapper>
      <H1>
        Welcome, {user.first} {user.last}
      </H1>
      <ul className="mb-5 flex flex-col gap-2">
        <li className="capitalize">
          <span>username:</span> <span>{user.username}</span>{" "}
        </li>
        <li className="capitalize">
          <span>email:</span> <span>{user.email}</span>{" "}
        </li>
        <li className="capitalize">
          <span>First name:</span> <span>{user.first}</span>{" "}
        </li>
        <li className="capitalize">
          <span>Last name:</span> <span>{user.last}</span>{" "}
        </li>
      </ul>
      <form action={logout}>
        <button
          className="rounded bg-gray-900 px-4 py-2 font-bold text-white hover:bg-primary-700"
          type="submit"
        >
          logout
        </button>
      </form>
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
