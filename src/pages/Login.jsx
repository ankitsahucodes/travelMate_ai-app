import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Google from "@/assets/google.svg?react";
import { useState } from "react";
import planetLogo from "../assets/planet.png";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      window.location.href = `${import.meta.env.VITE_API_URL}/auth/google`;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-slate-950">
      <Card className="w-full max-w-112.5 mx-auto md:p-10 p-5 rounded-4xl bg-slate-900 border-slate-800 text-white">
        <CardHeader className="flex flex-col items-center">
          <img
            src={planetLogo}
            alt="Logo"
            className="w-20 h-20 mb-4"
          />
          <CardTitle className="text-2xl text-sky-400 font-bold mb-2">
            TravelMate AI
          </CardTitle>
          <CardDescription className="mb-3 text-slate-400">
            Plan your perfect trip with AI
          </CardDescription>
        </CardHeader>

        <CardFooter className="flex-col items-center gap-2 bg-transparent md:pb-10 pb-5">
          <CardDescription className="mt-3.75 text-slate-400">
            Sign in to continue
          </CardDescription>

          <Button
            variant="outline"
            className={`${loading ? "opacity-60" : "opacity-100"} 
        w-full mt-3 py-1.5 cursor-pointer box-content rounded-2xl
        bg-slate-950 border-slate-700 text-white hover:bg-slate-800 hover:text-white`}
            onClick={() => handleLogin()}
          >
            <Google />
            <p>{loading ? "Signing in..." : "Continue with Google"}</p>
          </Button>

          <p className="text-center text-xs text-slate-500 mt-3">
            Discover destinations, plan smarter, travel better.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
