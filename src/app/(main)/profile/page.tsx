import Link from "next/link";
import {type PropsWithChildren} from "react";

import {PageWrapper} from "@/components/page-wrapper";
import {H1} from "@/components/typography";
import {getProfile} from "@/handlers/user";
import {cn} from "@/lib/cn";

import {logout} from "./actions";
import {Content} from "./dialog-content";
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
              <ListItemValue>{user.username}</ListItemValue>
            </ListItem>
            <ListItem>
              <ListItemTitle>email</ListItemTitle>
              <ListItemValue className="normal-case">
                {user.email}
              </ListItemValue>
            </ListItem>
            <ListItem>
              <ListItemTitle>First name</ListItemTitle>
              <ListItemValue>{user.first}</ListItemValue>
            </ListItem>
            <ListItem>
              <ListItemTitle>Last name</ListItemTitle>{" "}
              <ListItemValue>{user.last}</ListItemValue>
            </ListItem>
            <ListItem>
              <ListItemTitle>Saved trips</ListItemTitle>
              <div className="flex gap-2">
                <ViewTripsDialog totalTrips={Number(user.trips)}>
                  <Content userId={user.id} />
                </ViewTripsDialog>
              </div>
            </ListItem>
          </ul>
          <Link
            className="underline decoration-2 underline-offset-2 hover:opacity-50"
            href="/trips/new"
          >
            Create new destination
          </Link>
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

function ListItem({
  children,
  className,
}: PropsWithChildren<{className?: string}>) {
  return <li className={cn("flex gap-1 capitalize", className)}>{children}</li>;
}

function ListItemTitle({children}: PropsWithChildren) {
  return <span className="min-w-28 font-semibold">{children}:</span>;
}
function ListItemValue({
  children,
  className,
}: PropsWithChildren<{className?: string}>) {
  return <span className={cn("text-gray-700", className)}>{children}</span>;
}
