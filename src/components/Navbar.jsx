import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto mt-4 px-4 md:px-6">
        <div className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-2xl px-4 md:px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold text-white"
          >
            <img
              src="./src/assets/planet.png"
              alt="TravelMate AI"
              className="h-10 w-10"
            />
            TravelMate AI
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-white">
            <Link to="/">Home</Link>
            <Link to="/planner">Trip Planner</Link>
            <Link to="/savedtrips">Saved Trips</Link>

            
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button>
                  <Menu className="text-white" />
                </button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="bg-slate-900 border-slate-800 text-white w-70"
              >
                <div className="flex items-center gap-3 mt-5 ms-5 border-b border-slate-800 pb-5">
                  <img
                    src="./src/assets/planet.png"
                    alt="TravelMate"
                    className="h-10 w-10"
                  />

                  <div>
                    <h2 className="font-bold text-lg">TravelMate AI</h2>

                    <p className="text-xs text-slate-400">
                      Smart Travel Planning
                    </p>
                  </div>
                </div>

                <VisuallyHidden>
                  <SheetTitle>Navigation Menu</SheetTitle>
                </VisuallyHidden>

                <VisuallyHidden>
                  <SheetDescription>
                    TravelMate mobile navigation menu.
                  </SheetDescription>
                </VisuallyHidden>

                <div className="mt-5 flex flex-col">
                  <Link
                    to="/"
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 rounded-xl hover:bg-slate-900 transition"
                  >
                    🏠 Home
                  </Link>

                  <Link
                    to="/planner"
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 rounded-xl hover:bg-slate-900 transition"
                  >
                    ✨ Trip Planner
                  </Link>

                  <Link
                    to="/savedtrips"
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 rounded-xl hover:bg-slate-900 transition"
                  >
                    ❤️ Saved Trips
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
