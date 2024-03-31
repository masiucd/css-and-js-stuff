import "server-only";

import {z} from "zod";

import {sql} from "@/db/client";

let tipByIdSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  image: z.string(),
  user: z.number(),
  created: z.date(),
});

async function getTripById(tripId: string) {
  let rows = await sql`select t.id,
                              t.name,
                              t.description,
                              t.image,
                              t.user_id as user,
                              t.created_at as created
                            from trips t
                              where t.user_id = ${tripId}`;
  return tipByIdSchema.parse(rows[0]);
}

export async function getTrip(tripId: string) {
  return await getTripById(tripId);
}

export type Trip = z.infer<typeof tipByIdSchema>;
