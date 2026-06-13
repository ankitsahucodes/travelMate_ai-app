import { useEffect, useState } from "react";
import axios from "axios";

import TripCard from "../pages/TripCard";
import SavedTripsLoading from "../pages/SavedTripsLoading";

function SavedTrips() {
  const [loading, setLoading] = useState(true);
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/trips`, {
            withCredentials: true
          }
        );

        setTrips(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrips();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-32">
      <div className="max-w-7xl mx-auto">

        <div className="mb-12">
          <h1 className="text-5xl font-bold">
            Saved Trips
          </h1>

          <p className="mt-3 text-slate-400">
            Access all your AI-generated travel plans.
          </p>
        </div>

        {loading ? (
          <SavedTripsLoading />
        ) : trips.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold">
              No Trips Found
            </h2>

            <p className="text-slate-400 mt-3">
              Generate and save your first trip.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trips.map((trip) => (
              <TripCard
                key={trip._id}
                trip={trip}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SavedTrips;