import {redirect} from "next/navigation";
import {type PropsWithChildren} from "react";
import {z} from "zod";

import {PageWrapper} from "@/components/page-wrapper";
import {H1} from "@/components/typography";
import {getUserProfileByEmail} from "@/db/queries/user/q";
import {getSession} from "@/lib/session";

import {logout} from "./actions";
import {ViewTripsDialog} from "./view-trips-dialog";

export default async function ProfilePage() {
  let user = await getProfile();
  return (
    <PageWrapper>
      <aside className="mb-5">
        <H1>
          Welcome, {user.first} {user.last}!
        </H1>
      </aside>
      <section className="flex justify-between">
        <div className="flex flex-col gap-2">
          <ul className="mb-5 flex flex-col gap-2">
            <ListItem>
              <ListItemTitle>username</ListItemTitle>
              <span>{user.username}</span>
            </ListItem>
            <ListItem>
              <ListItemTitle>email</ListItemTitle> <span>{user.email}</span>
            </ListItem>
            <ListItem>
              <ListItemTitle>First name</ListItemTitle>
              <span>{user.first}</span>
            </ListItem>
            <ListItem>
              <ListItemTitle>Last name</ListItemTitle> <span>{user.last}</span>
            </ListItem>
            <ListItem>
              <ListItemTitle>Saved trips</ListItemTitle>
              <span>{user.trips}</span>
            </ListItem>
          </ul>
          <ViewTripsDialog />
        </div>
        <form action={logout}>
          <button
            className="rounded bg-gray-900/80 px-4 py-2 font-bold capitalize text-white hover:bg-primary-700"
            type="submit"
          >
            logout
          </button>
        </form>
      </section>
    </PageWrapper>
  );
}

function ListItem({children}: PropsWithChildren) {
  return <li className="flex gap-1 capitalize">{children}</li>;
}

function ListItemTitle({children}: PropsWithChildren) {
  return <span className="min-w-28 font-semibold">{children}:</span>;
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
