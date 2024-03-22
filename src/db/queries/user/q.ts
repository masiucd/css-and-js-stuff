import "server-only";

import {z} from "zod";

import {sql} from "@/db/client";

let userByEmailSchema = z.object({
  id: z.number(),
  email: z.string(),
  password: z.string(),
});

export async function getUserByEmail(email: string) {
  let rows = await sql`
                select u.id, u.email, u.password
                from users u
                where u.email = ${email}
  `;
  return userByEmailSchema.safeParse(rows[0]);
}

let userProfileSchema = z.object({
  id: z.number(),
  email: z.string(),
  first: z.string(),
  last: z.string(),
  username: z.string(),
});
export async function getUserProfileByEmail(email: string) {
  let rows = await sql`
        select u.id, u.email, u.first_name first, u.last_name last, u.username
        from users u
        where u.email = ${email}
  `;
  let user = userProfileSchema.safeParse(rows[0]);
  if (!user.success) {
    return null;
  }
  return user.data;
}
