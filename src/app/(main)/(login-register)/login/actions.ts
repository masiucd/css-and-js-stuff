"use server";
import "server-only";

import {compare} from "bcrypt";
import {redirect} from "next/navigation";
import {z} from "zod";

import {sql} from "@/db/client";
import {setSession} from "@/lib/session";

let userByEmailSchema = z.object({
  id: z.number(),
  email: z.string(),
  password: z.string(),
});
async function getUserByEmail(email: string) {
  let rows = await sql`
                select u.id, u.email, u.password
                from users u
                where u.email = ${email}
  `;
  return userByEmailSchema.safeParse(rows[0]);
}

async function comparePassword(password: string, hashedPassword: string) {
  return await compare(password, hashedPassword);
}

export async function login(prevState: any, formData: FormData) {
  let email = formData.get("email");
  let password = formData.get("password");
  if (!email || !password) throw new Error("Email and password are required");
  email = String(email);
  password = String(password);

  let userResult = await getUserByEmail(email);

  if (!userResult.success) {
    return {
      status: 404,
      message: "Invalid email or password",
    };
  }
  let user = userResult.data;
  let passwordMatch = await comparePassword(password, user.password);
  if (!passwordMatch) {
    return {
      status: 404,
      message: "Invalid email or password",
    };
  }

  await setSession(email);
  redirect("/profile");

  redirect("/profile");
}
