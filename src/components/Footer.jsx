const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <p className="text-center text-sm text-slate-500">
          © 2026 TravelMate. All rights reserved.
        </p>

        <p className="mt-2 text-center text-xs text-slate-600">
          Built with React • Tailwind CSS • shadcn/ui
        </p>

        <p className="mt-2 text-center text-xs text-slate-600">
          Made by{" "}
          <a
            href="https://github.com/ankitsahucodes"
            target="_blank"
            className="text-sky-400 hover:text-sky-300 transition"
          >
            Ankit Sahu
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
