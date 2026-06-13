import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import TripHero from "./trip/TripHero";
import TripSummary from "./trip/TripSummary";
import DayCard from "./trip/DayCard";

function TripDetailsPage() {
  const { id } = useParams();

  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/trips/${id}`,
          {
            withCredentials: true,
          },
        );

        setTrip(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrip();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex justify-center items-center text-white">
        Loading Trip...
      </div>
    );
  }

  if (!trip) {
    return (
      <div className="min-h-screen bg-slate-950 flex justify-center items-center text-white">
        Trip Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <TripHero trip={trip} />

        <div className="mt-8">
          <TripSummary trip={trip} />
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mt-8"></div>

        <div className="mt-10">
          <h2 className="text-3xl font-bold mb-6">Day-wise Itinerary</h2>

          <div className="space-y-6">
            {trip.days.map((day) => (
              <DayCard key={day.day} day={day} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripDetailsPage;
