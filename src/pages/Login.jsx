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
    <div className="min-h-screen flex items-center justify-center px-4 bg-linear-to-br from-sky-50 via-white to-violet-100">
      <Card className="w-full max-w-112.5 mx-auto md:p-10 p-5 rounded-4xl">
        <CardHeader className="flex flex-col items-center">
          <img
            src="./src/assets/planet.png"
            alt="Logo"
            className="w-20 h-20 mb-4"
          />
          <CardTitle className="text-2xl gradient-text font-bold mb-2">
            TravelMate AI
          </CardTitle>
          <CardDescription className="mb-3">
            Plan your perfect trip with AI
          </CardDescription>
        </CardHeader>

        <CardFooter className="flex-col items-center gap-2 bg-transparent md:pb-10 pb-5">
          <CardDescription className="mt-3.75">
            Sign in to continue
          </CardDescription>
          <Button
            variant="outline"
            className={`${loading ? "opacity-60" : "opacity-100"} w-full mt-3 py-1.5 cursor-pointer box-content rounded-2xl`}
            onClick={() => handleLogin()}
          >
            <Google />
            <p>{loading ? "Signing in..." : "Continue with Google"}</p>
          </Button>
          <p className="text-center text-xs text-muted-foreground mt-3">
            Discover destinations, plan smarter, travel better.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
