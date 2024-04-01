import "server-only";

import {z} from "zod";

import {sql} from "@/db/client";

let TripSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  image: z.string(),
  created_at: z.date(),
  author: z.string(),
});
const ADMIN_ID = 1;

export async function getTrips(limit = 3) {
  let rows = await sql`select t.id,
                          t.name,
                          t.description,
                          t.image,
                          t.created_at,
                          u.username as author
                            from trips t
                            inner join users u on t.user_id = ${ADMIN_ID}
                            order by t.created_at desc
                            limit ${limit}`;

  return TripSchema.array().parse(rows);
}

export type TripItem = z.infer<typeof TripSchema>;
