function DayCard({ day }) {
  return (
    <div className=" bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8">
      <div className="flex justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold">Day {day.day}</h3>

          <p className="text-sky-400">{day.title}</p>
        </div>

        <div className="text-right">
          <p className="text-slate-400">Estimated Cost</p>

          <p className="font-bold">₹{day.estimated_day_cost}</p>
        </div>
      </div>

      <div className="space-y-5">
        {day.activities.map((activity, index) => (
          <div
            key={index}
            className="relative pl-8 pb-6 border-l-2 border-sky-500"
          >
            <div className="absolute -left-2.25  w-4 h-4 rounded-full bg-sky-500" />

            <p className="text-sky-400 capitalize font-medium">
              {activity.time}
            </p>

            <h4 className="font-semibold text-lg mt-1">{activity.activity}</h4>

            <p className="text-slate-400 mt-2">{activity.description}</p>

            <p className="text-base text-slate-500 mt-2">
              📍 {activity.location}
            </p>

            <p className="font-semibold mt-2 text-emerald-400">
              ₹{activity.estimated_cost}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DayCard;
