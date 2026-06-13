import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <div>
        <header>
        <Navbar />
        </header>

        <main>
          <Toaster position="top-right" />
          <Outlet />
        </main>

      <footer>
        <Footer />
      </footer>
      </div>
    </>
  );
}

export default App;
