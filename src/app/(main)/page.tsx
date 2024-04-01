import {Flex, Heading, Text} from "@radix-ui/themes";
import {format} from "date-fns";
import Image from "next/image";

import {Icons} from "@/components/icons";
import {Link} from "@/components/link";
import {PageWrapper} from "@/components/page-wrapper";
import {getTrips, type TripItem as TripItemType} from "@/db/queries/trips/q";
import {slugify} from "@/lib/string";

async function HomePage() {
  let trips = await getTrips();
  return (
    <PageWrapper>
      <aside className=" mb-10 flex min-h-[55dvh] items-center rounded-md bg-hero-pattern bg-cover bg-center shadow-md">
        <div className="flex flex-col gap-2  p-2">
          <Heading as="h1" size="9" className="capitalize">
            Never stop exploring
          </Heading>
          <Text as="p" size="6" weight="medium" className="opacity-70">
            Welcome to Trip Talks, a social network for travelers
          </Text>
          <div>
            <Link href="/trips">
              <Text
                as="span"
                size="3"
                weight="medium"
                className="rounded-lg border border-primary-950 bg-primary-500 p-2 capitalize text-gray-900 hover:bg-primary-500/70"
              >
                Explore destinations
              </Text>
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

function TripItem({trip}: {trip: TripItemType}) {
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
            <Text as="span" size="5" weight="medium" className="text-gray-800">
              {trip.name}
            </Text>
          </Link>
          <Text as="p" size="3" className="text-gray-800/80">
            {trip.description}
          </Text>
        </div>
        <Avatar trip={trip} />
      </div>
    </li>
  );
}

function Avatar({trip}: {trip: TripItemType}) {
  let {author, created_at} = trip;
  return (
    <Flex gapX="5" className="max-w-48 " align="center">
      <div className="relative flex size-12 items-center justify-center rounded-full bg-gray-300">
        <Icons.personStanding size={28} />
      </div>
      <div className="flex flex-col gap-1">
        <Text as="span" size="3" weight="medium" className="capitalize">
          {author}
        </Text>
        <Text className="text-gray-500/80">
          {format(created_at, "MMM do, yyyy")}
        </Text>
      </div>
    </Flex>
  );
}

export default HomePage;
