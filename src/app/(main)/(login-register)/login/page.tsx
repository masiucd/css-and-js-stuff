import {type Metadata} from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account.",
};

export default function LoginPage() {
  return (
    <section className="mx-auto flex w-full max-w-xl flex-1 flex-col items-center justify-center border border-red-500">
      <aside className="mb-10 w-full border border-red-500">
        <h1>Login</h1>
        <p>Login to your account.</p>
      </aside>
      <form action="" className="w-full px-20">
        <fieldset className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <div>
            <button
              className="h-10 min-w-16 rounded-md bg-primary-500 px-2 py-1 font-semibold text-gray-100 shadow"
              type="submit"
            >
              Login
            </button>
          </div>
        </fieldset>
      </form>
    </section>
  );
}
