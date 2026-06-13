import { useState } from "react";
import axios from "axios";
import { MapPin, Calendar, Wallet, Sparkles, Users } from "lucide-react";
import TripHero from "./trip/TripHero";
import TripSummary from "./trip/TripSummary";
import DayCard from "./trip/DayCard";
import Loading from "../components/Loading";
import toast from "react-hot-toast";

function Planner() {
  const [loading, setLoading] = useState(false);
  const [trip, setTrip] = useState(null);

  const [formData, setFormData] = useState({
    destination: "",
    days: "",
    budget: "",
    persons: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleGenerate = async () => {
    try {
      setLoading(true);

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}trips/create`,
        formData,
        { withCredentials: true },
      );

      setTrip(res.data);
    } catch (error) {
      console.log(error);
      alert("Failed to generate trip");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/trips/save`, trip, {
        withCredentials: true,
      });

      toast.success("Trip saved successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-32">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold">Plan Your Dream Trip</h1>

          <p className="mt-4 text-slate-400 text-lg">
            Let AI create a personalized itinerary, budget plan and travel
            guide.
          </p>
        </div>

        {/* Form */}
        <div className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-3xl p-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="flex items-center gap-3 bg-slate-800 rounded-xl px-4 py-3">
              <MapPin className="text-sky-400" />

              <input
                type="text"
                name="destination"
                placeholder="Destination"
                value={formData.destination}
                onChange={handleChange}
                className="bg-transparent outline-none w-full"
                required
              />
            </div>

            <div className="flex items-center gap-3 bg-slate-800 rounded-xl px-4 py-3">
              <Calendar className="text-sky-400" />

              <input
                type="number"
                name="days"
                placeholder="Days"
                value={formData.days}
                onChange={handleChange}
                className="bg-transparent outline-none w-full"
                required
              />
            </div>

            <div className="flex items-center gap-3 bg-slate-800 rounded-xl px-4 py-3">
              <Wallet className="text-sky-400" />

              <input
                type="number"
                name="budget"
                placeholder="Budget ₹"
                value={formData.budget}
                onChange={handleChange}
                className="bg-transparent outline-none w-full"
                required
              />
            </div>

            <div className="flex items-center gap-3 bg-slate-800 rounded-xl px-4 py-3">
              <Users className="text-sky-400" />

              <input
                type="number"
                min="1"
                name="persons"
                placeholder="Persons"
                value={formData.persons}
                onChange={handleChange}
                className="bg-transparent outline-none w-full"
                required
              />
            </div>

            <button
              onClick={handleGenerate}
              disabled={loading}
              className="bg-sky-500 hover:bg-sky-600 disabled:bg-slate-700 rounded-xl py-3 font-semibold flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles size={18} />
                  Generate Trip
                </>
              )}
            </button>
          </div>
        </div>

        {loading && <Loading />}

        {trip && (
          <div className="mt-10 space-y-8">
            <TripHero trip={trip} />

            <TripSummary trip={trip} />

            {trip.days.map((day) => (
              <DayCard key={day.day} day={day} />
            ))}

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleSave}
                className="px-8 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 font-semibold transition"
              >
                💾 Save Trip
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Planner;
