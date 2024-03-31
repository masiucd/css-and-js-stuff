import {sql} from "@/db/client";

async function getTripById(tripId: string) {
  let rows = await sql`select * from trips where id = ${tripId}`;
  return rows[0];
}

export default async function TripPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  let trip = await getTripById(params.id);
  return (
    <div>
      <pre>{JSON.stringify(trip, null, 2)}</pre>
      <EditTrip trip={trip} />
    </div>
  );
}

// TODO
// Edit trip but only if user is the author
