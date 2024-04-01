"use client";

import {Flex, Text} from "@radix-ui/themes";
import Link from "next/link";
import {useFormState} from "react-dom";

import {Button} from "@/components/button";
import {Icons} from "@/components/icons";
import {TextInput} from "@/components/text-input";
import {cn} from "@/lib/cn";

import {login} from "./actions";

let initialState = {
  status: 200,
  message: "",
};

export function LoginForm() {
  let [state, formAction] = useFormState(login, initialState);
  return (
    <form
      action={formAction}
      className="w-full rounded-md border border-gray-500 bg-gray-100 px-2 py-5 shadow-md"
    >
      <fieldset
        className={cn(
          "flex flex-col gap-2",
          state.status !== 200 && "animate-shake-once",
        )}
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <TextInput
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email..."
            icon={<Icons.mail size={16} />}
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <TextInput
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password..."
            icon={<Icons.lock size={16} />}
            required
          />
        </div>
        <div>
          <Button type="submit">
            <Text
              as="span"
              size="3"
              weight="medium"
              className="capitalize text-gray-100"
            >
              Login
            </Text>
          </Button>
        </div>
        <Flex className="mb-2 h-3" direction="column" align="baseline">
          <small className="mt-3 flex gap-1">
            <span>Don&apos;t have an account?</span>
            <Link
              href="/register"
              className="text-primary-500 hover:opacity-45"
            >
              Register
            </Link>
          </small>
          {state.status !== 200 && (
            <Text as="span" className="text-red-500" weight="medium" size="3">
              {state.message}
            </Text>
          )}
        </Flex>
      </fieldset>
    </form>
  );
}
