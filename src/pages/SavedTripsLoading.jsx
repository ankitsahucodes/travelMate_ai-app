function SavedTripsLoading() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div
          key={item}
          className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800"
        >
          <div className="h-52 bg-slate-800 animate-pulse" />

          <div className="p-5 space-y-3">
            <div className="h-5 bg-slate-800 rounded animate-pulse" />
            <div className="h-4 bg-slate-800 rounded animate-pulse w-2/3" />
            <div className="h-10 bg-slate-800 rounded animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default SavedTripsLoading;
