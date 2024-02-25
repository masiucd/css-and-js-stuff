import {Box, Heading, Text} from "@radix-ui/themes";
import {format} from "date-fns";
import Image from "next/image";

import Link from "@/components/link";
import {PageWrapper} from "@/components/page-wrapper";
import {sql} from "@/db/client";

let exampleTrips = [
  {
    id: 1,
    title: "My trip to Paris",
    description: "A trip to Paris with my friends",
    image: "paris",
    date: "2024-07-01",
  },
  {
    id: 2,
    title: "Hiking in the mountains",
    description: "A trip to the mountains with my family",
    image: "mountains",
    date: "2024-07-15",
  },
  {
    id: 3,
    title: "A weekend in London",
    description: "A weekend trip to London with my partner",
    image: "london",
    date: "2023-08-01",
  },
  {
    id: 4,
    title: "A week in New York",
    description: "A week in New York with my partner",
    image: "new-york",
    date: "2022-08-15",
  },
  {
    id: 5,
    title: "A trip to Tokyo",
    description: "A trip to Tokyo with my friends",
    image: "tokyo",
    date: "2020-09-01",
  },
  {
    id: 6,
    title: "A trip to Rome",
    description: "A trip to Rome with my friends",
    image: "rome",
    date: "2024-09-15",
  },
];

async function HomePage() {
  let rows = await sql`SELECT * FROM users`;
  console.log("rows", rows);
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
          {exampleTrips.map((trip) => (
            <li key={trip.id} className="rounded-md bg-gray-100 shadow-sm">
              <Image
                src={`/images/${trip.image}.jpeg`}
                alt={trip.title}
                className="mb-2  h-40 w-full  rounded-md  object-cover object-right md:h-[20rem]"
                width={500}
                height={500}
              />
              <Box className="p-2">
                <Link href={`/trips/${slugify(trip.title)}`}>
                  <Heading as="h3" size="5">
                    {trip.title}
                  </Heading>
                </Link>
                <Text as="p">{trip.description}</Text>
                <Text as="p">{format(trip.date, "MMMM do, yyyy")}</Text>
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
