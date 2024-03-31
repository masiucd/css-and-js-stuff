"use server";
import "server-only";

import {redirect} from "next/navigation";
import {z} from "zod";

import {sql} from "@/db/client";

let insertNewTripSchema = z.object({
  name: z.string(),
  image: z.string(),
  description: z.string(),
  userId: z.number(),
});

type TripRecord = {
  name: string;
  image: string;
  description: string;
  userId: number;
};
async function insertNewTrip(tripRecord: TripRecord) {
  let parsedRecord = insertNewTripSchema.safeParse(tripRecord);
  if (!parsedRecord.success) {
    throw new Error("Invalid trip record");
  }
  await sql`
      insert into trips (name, image, description, user_id)
      values (${tripRecord.name}, ${tripRecord.image}, ${tripRecord.description}, ${tripRecord.userId})
  `;
  return true;
}

export async function createTrip(formData: FormData) {
  let name = formData.get("name");
  let image = formData.get("image");
  let description = formData.get("description");
  let userId = formData.get("user-id");
  if (!name || !image || !description || !userId) {
    throw new Error("Missing required fields");
  }
  await insertNewTrip({
    name: name.toString(),
    image: image.toString(),
    description: description.toString(),
    userId: Number(userId),
  });
  redirect("/profile");
}
