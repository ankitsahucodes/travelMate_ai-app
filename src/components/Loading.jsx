const Loading = () => {
  return (
    <div className="mt-10 border border-slate-800 bg-slate-900 rounded-3xl p-8">
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 border-4 border-sky-500 border-t-transparent rounded-full animate-spin" />

        <div>
          <h3 className="font-semibold text-white">
            TravelMate AI is planning your trip...
          </h3>

          <p className="text-slate-400 text-sm">
            Generating itinerary, budget breakdown and travel tips.
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <div className="h-4 bg-slate-800 rounded animate-pulse" />
        <div className="h-4 bg-slate-800 rounded animate-pulse w-5/6" />
        <div className="h-4 bg-slate-800 rounded animate-pulse w-4/6" />
        <div className="h-4 bg-slate-800 rounded animate-pulse w-3/6" />
      </div>
    </div>
  );
};

export default Loading;