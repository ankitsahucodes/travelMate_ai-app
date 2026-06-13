import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [featuredTrips, setFeaturedTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/featured/trip`,
      );

      setFeaturedTrips(res.data);
    };

    fetchTrips();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-sky-500/10 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
          <div className="text-center">
            <span className="px-4 py-2 rounded-full border border-slate-700 bg-slate-900 text-sky-400 text-sm">
              ✈️ AI Powered Travel Planning
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight">
              Plan Your Perfect
              <span className="block text-sky-400">Journey with AI</span>
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-slate-400 text-lg">
              Generate personalized itineraries, local tips, budget planning and
              destination insights in seconds.
            </p>
          </div>
        </div>
      </section>
      <div className=" flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          to="/planner"
          className="px-8 py-3 bg-sky-500 hover:bg-sky-600 rounded-xl font-semibold text-white transition"
        >
          ✈️ Plan New Trip
        </Link>

        <Link
          to="/savedtrips"
          className="px-8 py-3 bg-white/10 backdrop-blur border border-white/20 hover:bg-white/20 rounded-xl font-semibold text-white transition"
        >
          ❤️ Saved Trips
        </Link>
      </div>

      {/* Popular Destinations */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Popular Destinations
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredTrips.map((trip) => (
            <Link
              key={trip.id}
              to={`/featured/trip/${trip.id}`}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 hover:border-sky-500 transition"
            >
              <img
                src={trip.imageUrl}
                alt={trip.destination}
                className="h-48 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="text-lg font-bold">{trip.destination}</h3>

                <p className="text-slate-400">{trip.country}</p>

                <p className="text-sm mt-2">
                  {trip.duration_days} Days • {trip.person_count} Persons
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why TravelMate?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-4">🧠 AI Itinerary</h3>
            <p className="text-slate-400">
              Generate complete day-wise travel plans instantly.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-4">💰 Budget Planning</h3>
            <p className="text-slate-400">
              Track and optimize expenses before your journey begins.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-4">💡 Local Tips</h3>
            <p className="text-slate-400">
              Get insider recommendations and hidden gems.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="relative overflow-hidden rounded-3xl">
          {/* Background GIF */}
          <img
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmM4ZzUwYjN1bG90d2phaGN5M3pjanR5c3FsZWtnbzZ3dGF4MmhyciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Rl0AyVtYvUET0johdu/giphy.gif"
            alt="Travel Animation"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative z-10 p-12 md:p-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready for Your Next Adventure?
            </h2>

            <p className="mt-4 text-slate-200 text-lg">
              Let AI build your perfect trip in seconds.
            </p>

            <Link
              to="/planner"
              className="inline-block mt-8 px-8 py-3 bg-sky-500 hover:bg-sky-600 rounded-xl font-semibold text-white transition"
            >
              Start Planning
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
