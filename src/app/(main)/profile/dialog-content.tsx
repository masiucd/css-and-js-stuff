import Image from "next/image";
import Link from "next/link";

import {Lead, P} from "@/components/typography";
import {getTripsByUserId} from "@/db/queries/user/q";

async function getMyTrips(userId: number) {
  let res = await getTripsByUserId(userId);

  if (!res.success) {
    return [];
  }
  return res.data;
}

export async function Content({userId}: {userId: number}) {
  let tripsResult = await getMyTrips(userId);
  return (
    <div className="mb-5 flex flex-col ">
      <ul className="grid max-h-[32rem] grid-cols-1 gap-3  overflow-scroll sm:grid-cols-2 md:max-h-none md:grid-cols-3">
        {tripsResult.map((trip) => (
          <li
            key={trip.id}
            className="flex flex-col justify-start gap-3 rounded-md  bg-gray-100 p-1 shadow-md"
          >
            <Image
              src={`/images/${trip.image}.jpeg`}
              alt={trip.name}
              className="size-32 rounded-md  object-cover shadow-sm lg:size-40 "
              width={524}
              height={524}
            />
            <div>
              <Link
                href={`/trips/${trip.name}`}
                className="font-semibold underline hover:opacity-50"
              >
                <Lead>{trip.name}</Lead>
              </Link>
              <P>{trip.description}</P>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
