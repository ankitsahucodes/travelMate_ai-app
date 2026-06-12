function DayCard({ day }) {
  return (
    <div className="bg-slate-900 rounded-3xl p-6">
      <div className="flex justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold">
            Day {day.day}
          </h3>

          <p className="text-sky-400">
            {day.title}
          </p>
        </div>

        <div className="text-right">
          <p className="text-slate-400">
            Estimated Cost
          </p>

          <p className="font-bold">
            ₹{day.estimated_day_cost}
          </p>
        </div>
      </div>

      <div className="space-y-5">
        {day.activities.map((activity, index) => (
          <div
            key={index}
            className="border-l-2 border-sky-500 pl-4"
          >
            <p className="text-sky-400 capitalize">
              {activity.time}
            </p>

            <h4 className="font-semibold">
              {activity.activity}
            </h4>

            <p className="text-slate-400">
              {activity.description}
            </p>

            <p className="text-sm text-slate-500">
              📍 {activity.location}
            </p>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default DayCard;