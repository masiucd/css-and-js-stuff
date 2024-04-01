"use client";
import {TextField} from "@radix-ui/themes";
import Link from "next/link";
import {type ReactNode} from "react";
import {useFormState} from "react-dom";

import {Icons} from "@/components/icons";

import {login} from "./actions";

let initialState = {
  status: 200,
  message: "",
};

export function LoginForm() {
  let [state, formAction] = useFormState(login, initialState);
  return (
    <form action={formAction} className="w-full border border-green-500 px-20 ">
      <fieldset className="flex flex-col gap-2">
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
        <div className="mb-2 h-3">
          {state.status !== 200 && (
            <p className="text-sm text-red-500">{state.message}</p>
          )}
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
      <small className="mt-3 flex gap-1">
        <span>Don&apos;t have an account?</span>
        <Link href="/register" className="text-primary-500 hover:opacity-45">
          Register
        </Link>
      </small>
    </form>
  );
}

type InputType =
  | "date"
  | "datetime-local"
  | "email"
  | "hidden"
  | "month"
  | "number"
  | "password"
  | "search"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week"
  | "password";

interface TextInputProps {
  type: InputType;
  name: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  id?: string;
  icon?: ReactNode;
}

export function TextInput({
  type,
  name,
  placeholder,
  required = true,
  className,
  id,
  icon,
}: TextInputProps) {
  return (
    <TextField.Root
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      className={className}
      id={id}
    >
      {icon && <TextField.Slot>{icon}</TextField.Slot>}
    </TextField.Root>
  );
}
