import {format} from "date-fns";
import Image from "next/image";
import {z} from "zod";

import {Icons} from "@/components/icons";
import Link from "@/components/link";
import {PageWrapper} from "@/components/page-wrapper";
import {H1, Lead} from "@/components/typography";
import {sql} from "@/db/client";
import {slugify} from "@/lib/string";

let TripSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  image: z.string(),
  created_at: z.date(),
  author: z.string(),
});
const ADMIN_ID = 1;
async function getTrips() {
  let rows = await sql`select t.id,
                          t.name,
                          t.description,
                          t.image,
                          t.created_at,
                          u.username as author
                            from trips t
                            inner join users u on t.user_id = ${ADMIN_ID}
                            order by t.created_at desc
                            limit 3`;

  return TripSchema.array().parse(rows);
}

async function HomePage() {
  let trips = await getTrips();
  return (
    <PageWrapper>
      <aside className=" mb-10 flex min-h-[55dvh] items-center rounded-md bg-hero-pattern bg-cover bg-center shadow-md">
        <div className="flex flex-col gap-2  p-2">
          <H1 className="capitalize">Never stop exploring</H1>
          <Lead className="opacity-60 ">
            Welcome to Trip Talks, a social network for travelers
          </Lead>
          <div>
            <Link
              className="rounded-md bg-gray-900/90 px-2 py-1 text-white transition-colors hover:bg-primary-500/90"
              href="/trips"
            >
              Explore destinations
            </Link>
          </div>
        </div>
      </aside>
      <section className="md:my-[2rem]">
        <ul className=" grid  grid-cols-1 gap-10 p-5 md:grid-cols-3">
          {trips.map((trip) => (
            <TripItem key={trip.id} trip={trip} />
          ))}
        </ul>
      </section>
    </PageWrapper>
  );
}

function TripItem({trip}: {trip: z.infer<typeof TripSchema>}) {
  return (
    <li className="rounded-md bg-white shadow-md">
      <Image
        src={`/images/${trip.image}.jpeg`}
        alt={trip.name}
        className="mb-2  h-40 w-full  rounded-md  object-cover object-right md:h-[16rem]"
        width={500}
        height={500}
      />
      <div className="min-h-32 p-2">
        <div className="mb-5 flex flex-col gap-1">
          <Link href={`/trips/${slugify(trip.name)}`}>
            <p className="font-semibold text-gray-800/80">{trip.name}</p>
          </Link>
          <p className="text-gray-500/80">{trip.description}</p>
        </div>
        <Avatar trip={trip} />
      </div>
    </li>
  );
}

function Avatar({trip}: {trip: z.infer<typeof TripSchema>}) {
  let {author, created_at} = trip;
  return (
    <div className="flex max-w-48 items-center gap-5 ">
      <div className="relative flex size-12 items-center justify-center rounded-full bg-gray-300">
        <Icons.personStanding size={32} />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-sm font-semibold capitalize opacity-60">{author}</p>
        <p className="text-gray-500/80">{format(created_at, "MMM do, yyyy")}</p>
      </div>
    </div>
  );
}

export default HomePage;
