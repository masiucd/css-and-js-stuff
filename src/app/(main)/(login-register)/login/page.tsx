import {type Metadata} from "next";
import Link from "next/link";
import {z} from "zod";

import {H1, P} from "@/components/typography";
import {sql} from "@/db/client";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account.",
};

let userByEmailSchema = z.object({
  id: z.number(),
  email: z.string(),
});
async function getUserByEmail(email: string) {
  let rows = await sql`
                select u.id, u.email
                from users u
                where u.email = ${email}
  `;
  return userByEmailSchema.safeParse(rows[0]);
}

async function login(formData: FormData) {
  "use server";
  let email = formData.get("email");
  let password = formData.get("password");
  if (!email || !password) throw new Error("Email and password are required");
  email = String(email);
  password = String(password);
  let userResult = await getUserByEmail(email);
  if (!userResult.success) {
    throw new Error("Invalid email or password");
  }
  let user = userResult.data;
  //1. check if user exists in DB
  //2. if user exists, check if password is correct

  //3. if password is correct, create a session
  //4. redirect to dashboard/profile
}

export default function LoginPage() {
  return (
    <section className="mx-auto mt-20 flex w-full max-w-xl  flex-col items-center  border border-red-500 md:min-h-[32rem]">
      <aside className="mb-20 w-full border border-red-500">
        <H1>Login</H1>
        <P>Login to your account.</P>
      </aside>
      <form action={login} className="w-full border border-green-500 px-20 ">
        <fieldset className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" required />
          </div>
          <div>
            <button
              className="h-10 min-w-16 rounded-md bg-gray-900 px-2 py-1 font-semibold text-gray-100  shadow-md transition-all duration-150 hover:bg-primary-500"
              type="submit"
            >
              Login
            </button>
          </div>
        </fieldset>
        <small className="mt-3 block">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-primary-500 hover:opacity-45">
            Register
          </Link>
        </small>
      </form>
    </section>
  );
}
