import {getTrip} from "./actions";
import {EditTrip} from "./edit-trip";

export default async function TripPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  let trip = await getTrip(params.id);
  return (
    <div>
      <pre>{JSON.stringify(trip, null, 2)}</pre>
      <EditTrip trip={trip} />
    </div>
  );
}
