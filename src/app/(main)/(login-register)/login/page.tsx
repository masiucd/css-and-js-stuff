import {type Metadata} from "next";
import {redirect} from "next/navigation";

import {H1, P} from "@/components/typography";
import {getSession} from "@/lib/session";

import {LoginForm} from "./login-form";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account.",
};

export default async function LoginPage() {
  let session = await getSession();
  if (session) {
    redirect("/profile");
  }
  return (
    <section className="mx-auto mt-20 flex w-full max-w-xl  flex-col items-center  border border-red-500 md:min-h-[32rem]">
      <aside className="mb-20 w-full border border-red-500">
        <H1>Login</H1>
        <P>Login to your account.</P>
      </aside>
      <LoginForm />
    </section>
  );
}
