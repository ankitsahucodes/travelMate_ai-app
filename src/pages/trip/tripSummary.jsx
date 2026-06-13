function TripSummary({ trip }) {
  return (
    <div className="space-y-6">
      <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 hover:border-sky-500 transition">
        <div className="bg-slate-900 rounded-2xl p-5">
          <p className="text-slate-400">Duration</p>
          <h3 className="text-xl font-bold">{trip.duration_days} Days</h3>
        </div>

        <div className="bg-slate-900 rounded-2xl p-5">
          <p className="text-slate-400">Travelers</p>
          <h3 className="text-xl font-bold">{trip.person_count}</h3>
        </div>

        <div className="bg-slate-900 rounded-2xl p-5">
          <p className="text-slate-400">Budget</p>
          <h3 className="text-xl font-bold">
            ₹{trip.budget_inr.toLocaleString()}
          </h3>
        </div>

        <div className="bg-slate-900 rounded-2xl p-5">
          <p className="text-slate-400">Currency</p>
          <h3 className="text-xl font-bold">{trip.currency}</h3>
        </div>
      </div>

      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-6">
        <h3 className="font-bold text-yellow-400">Best Time To Visit</h3>

        <p className="mt-2">{trip.best_time_to_visit.season}</p>

        <p className="text-slate-400 mt-2">{trip.best_time_to_visit.reason}</p>
      </div>

      <div className="bg-slate-900 rounded-2xl p-6">
        <h3 className="font-bold text-xl mb-4">Top Attractions</h3>

        <div className="flex flex-wrap gap-2">
          {trip.top_attractions.map((place) => (
            <span
              key={place}
              className="bg-sky-500/20 text-sky-400 px-3 py-2 rounded-full"
            >
              {place}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-slate-900 rounded-2xl p-6">
        <h3 className="font-bold text-xl mb-4">Travel Tips</h3>

        <ul className="space-y-3">
          {trip.travel_tips.map((tip) => (
            <li key={tip}>✨ {tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TripSummary;
