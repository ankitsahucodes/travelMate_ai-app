import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <header>
        <Navbar />
        </header>

        <main>
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
