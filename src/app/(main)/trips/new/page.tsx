import {type Metadata} from "next";
import {revalidatePath} from "next/cache";
import {z} from "zod";

import {PageWrapper} from "@/components/page-wrapper";
import {H1, H2} from "@/components/typography";
import {siteData} from "@/config/site-data";
import {sql} from "@/db/client";
import {getProfile} from "@/handlers/user";

export const metadata: Metadata = {
  title: `${siteData.title} | Create new trips`,
  description: `${siteData.description} | Create new trips`,
};

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
  let rows = await sql`
      insert into trips (name, image, description, user_id)
      values (${tripRecord.name}, ${tripRecord.image}, ${tripRecord.description}, ${tripRecord.userId})
      returning *
  `;
  let result = insertNewTripSchema.safeParse(rows[0]);
  return result.success;
}

async function createTrip(formData: FormData) {
  "use server";
  let name = formData.get("name");
  let image = formData.get("image");
  let description = formData.get("description");
  let userId = formData.get("user-id");
  if (!name || !image || !description || !userId) {
    throw new Error("Missing required fields");
  }
  revalidatePath("/trips/new");
  return await insertNewTrip({
    name: name.toString(),
    image: image.toString(),
    description: description.toString(),
    userId: Number(userId),
  });
}

export default async function NewTripPage() {
  let user = await getProfile();
  return (
    <PageWrapper>
      <H1 className="my-10">Create new trips</H1>
      <section className="mx-auto w-full max-w-2xl  p-2">
        <form action={createTrip}>
          <fieldset className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="image">image</label>
            <select name="image" id="image" required>
              <option value="london">London</option>
              <option value="paris">Paris</option>
              <option value="nyc">New York City</option>
            </select>
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" required></textarea>
            <input type="hidden" name="user-id" value={user.id} />
            <button
              className="rounded-md bg-gray-900 px-4 py-2 text-gray-50  transition-colors hover:opacity-55"
              type="submit"
            >
              Create trip
            </button>
          </fieldset>
        </form>
      </section>
      <div>
        <H2>Your created trips ({user.trips})</H2>
        <button>view trips</button>
        <ul></ul>
      </div>
    </PageWrapper>
  );
}
