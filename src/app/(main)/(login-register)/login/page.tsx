import {Heading, Section, Text} from "@radix-ui/themes";
import {type Metadata} from "next";
import {redirect} from "next/navigation";

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
    <Section className="mx-auto mt-20 flex w-full max-w-xl  flex-col items-center md:min-h-[32rem]">
      <aside className="mb-5 w-full ">
        <Heading as="h1" size="9" className=" capitalize text-gray-900">
          Login
        </Heading>
        <Text as="p" size="6" weight="medium" className="opacity-70">
          Login to your account.
        </Text>
      </aside>
      <LoginForm />
    </Section>
  );
}
