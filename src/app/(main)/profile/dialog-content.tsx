import Image from "next/image";

import {getTripsByUserId} from "@/db/queries/user/q";

async function getMyTrips(userId: number) {
  let res = await getTripsByUserId(userId);
  console.log("🚀 ~ getMyTrips ~ res:", res);
  if (!res.success) {
    return [];
  }
  return res.data;
}

export async function Content({userId}: {userId: number}) {
  console.log("🚀 ~ Content ~ userId:", userId);
  let tripsResult = await getMyTrips(userId);
  console.log("🚀 ~ Content ~ tripsResult:", tripsResult);
  return (
    <div className="flex flex-col">
      <ul className="flex flex-wrap gap-3 p-5">
        {tripsResult.map((trip) => (
          <li key={trip.id} className="flex gap-3">
            <Image
              src={`/images/${trip.image}.jpeg`}
              alt={trip.name}
              className="size-16 rounded-md object-cover"
              width={64}
              height={64}
            />
            <div>
              <h3>{trip.name}</h3>
              <p>{trip.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
