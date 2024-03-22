"use client";
import Link from "next/link";
import {useFormState} from "react-dom";

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
          <input type="email" name="email" id="email" required />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
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
