import "./App.css";
import { Header } from "./components/Header/Header";
import { Routers } from "./utils/Routers";
import { Footer } from "./components/Footer/Footer";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
function App() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);
  const location = useLocation();

  const hideLayout =
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname.startsWith("/admin");

  return (
    <div className="overflow-x-hidden">
      {!hideLayout && <Header />}

      {hideLayout ? (
        <Routers />
      ) : (
        <div className="max-w-[1440px] mx-auto px-4">
          <Routers />
        </div>
      )}

      {!hideLayout && <Footer />}

      <ToastContainer position="bottom-right" autoClose={3000} theme="light" />
    </div>
  );
}

export default App;
