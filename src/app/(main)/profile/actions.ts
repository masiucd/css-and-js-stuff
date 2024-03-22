"use server";
import "server-only";

import {redirect} from "next/navigation";

import {destroySession} from "@/lib/session";

export async function logout() {
  destroySession();
  redirect("/");
}
