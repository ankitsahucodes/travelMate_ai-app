import { Calendar, Users, Wallet, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

function TripCard({ trip, handleDelete }) {
  return (
    <div className="relative bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-sky-500 transition">
      <img
        src={trip.imageUrl}
        alt={trip.destination}
        className="h-52 w-full object-cover"
      />

      <button
        onClick={() => handleDelete(trip._id)}
        className="absolute top-3 right-3 bg-red-500/90 hover:bg-red-600 p-2 rounded-full transition"
      >
        <Trash2 size={18} className="text-white" />
      </button>

      <div className="p-5">
        <h2 className="text-xl font-bold">
          {trip.destination}, {trip.country}
        </h2>

        <div className="mt-4 space-y-2 text-slate-400">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            {trip.duration_days} Days
          </div>

          <div className="flex items-center gap-2">
            <Users size={16} />
            {trip.person_count} Travelers
          </div>

          <div className="flex items-center gap-2">
            <Wallet size={16} />
            ₹{trip.budget_inr.toLocaleString()}
          </div>
        </div>

        <Link to={`/trips/${trip._id}`} className="block mt-5">
          <button className="w-full bg-sky-500 hover:bg-sky-600 py-3 rounded-xl font-semibold transition">
            View Trip
          </button>
        </Link>
      </div>
    </div>
  );
}

export default TripCard;