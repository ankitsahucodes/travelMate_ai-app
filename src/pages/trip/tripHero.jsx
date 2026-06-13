function TripHero({ trip }) {
  return (
    <div className="relative overflow-hidden rounded-3xl">
      <img
        src={trip.imageUrl}
        alt={trip.destination}
        className="w-full h-80 object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />

      <div className="absolute bottom-6 left-6">
        <h1 className="text-4xl font-bold text-white">
          {trip.destination}, {trip.country} 
        </h1>

        <p className="text-slate-200 mt-2">
          {trip.duration_days} Days • {trip.person_count} Person{trip.person_count > 1 ? 's' : ''}
        </p>
      </div>
    </div>
  );
}

export default TripHero;