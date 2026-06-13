import { Mail } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [user, setUser] = useState(null);
  const [savedTrips, setSavedTrips] = useState(0);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/auth/me`, {
          withCredentials: true,
        });

        setUser(res.data.user);
        setSavedTrips(res.data.savedTrips);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-950 flex justify-center items-center text-white">
        Loading Profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src={
                user.profilePicture ||
                `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=0f172a&color=ffffff`
              }
              alt={user.name}
              className="w-32 h-32 rounded-full border-4 border-sky-500 object-cover"
            />

            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold">{user.name}</h1>

              <div className="flex items-center justify-center md:justify-start gap-2 mt-3 text-slate-400">
                <Mail size={18} />
                {user.email}
              </div>

              <p className="mt-4 text-slate-400">
                Travel enthusiast using AI to plan smarter adventures.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <h2 className="text-2xl font-bold">
              Saved Trips:{" "}
              <span className="text-slate-400 ms-4 text-2xl">{savedTrips}</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
