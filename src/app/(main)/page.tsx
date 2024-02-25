import {Box, Heading, Text} from "@radix-ui/themes";
import {format} from "date-fns";
import Image from "next/image";
import {z} from "zod";

import Link from "@/components/link";
import {PageWrapper} from "@/components/page-wrapper";
import {sql} from "@/db/client";

let TripSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  image: z.string(),
  created_at: z.date(),
});
const ADMIN_ID = 1;
async function getTrips() {
  let rows = await sql`select t.id,
                          t.name,
                          t.description,
                          t.image,
                          t.created_at
                            from trips t
                            where t.user_id = ${ADMIN_ID}
                            limit 6`;

  return TripSchema.array().parse(rows);
}

async function HomePage() {
  let trips = await getTrips();

  return (
    <PageWrapper>
      <aside className="mb-10">
        <Heading as="h1" size="9">
          Trip Talks
        </Heading>
        <Text as="p">
          Welcome to Trip Talks, a social network for travelers.
        </Text>
        <aside className="flex gap-2">
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </aside>
      </aside>
      <section>
        <Heading as="h2" size="7" className="mb-5">
          Popular Trips
        </Heading>
        <ul className="grid  grid-cols-1  gap-10  p-5 sm:grid-cols-2 md:grid-cols-3">
          {trips.map((trip) => (
            <li key={trip.id} className="rounded-md bg-gray-100 shadow-sm">
              <Image
                src={`/images/${trip.image}.jpeg`}
                alt={trip.name}
                className="mb-2  h-40 w-full  rounded-md  object-cover object-right md:h-[20rem]"
                width={500}
                height={500}
              />
              <Box className="p-2">
                <Link href={`/trips/${slugify(trip.name)}`}>
                  <Heading as="h3" size="5">
                    {trip.name}
                  </Heading>
                </Link>
                <Text as="p">{trip.description}</Text>
                <Text as="p">{format(trip.created_at, "MMMM do, yyyy")}</Text>
              </Box>
            </li>
          ))}
        </ul>
      </section>
    </PageWrapper>
  );
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}

export default HomePage;
