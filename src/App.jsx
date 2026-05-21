import "./App.css";
import { Header } from "./pages/Header/Header";
import { Routers } from "./utils/Routers";
import { Footer } from "./pages/Footer/Footer";
import { useLocation } from "react-router-dom";
import { Login } from "./pages/LoginRegister/Login";
import { Register } from "./pages/LoginRegister/Register";
import Admin from "./Admin/Admin";

function App() {
  const location = useLocation();

  const hideLayout =
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname.startsWith("/admin");

  return (
        <div>
      
      {!hideLayout && <Header />}

       {hideLayout ? (
        <Routers />
      ) : (
        <div className="max-w-[1440px] mx-auto px-4">
          <Routers />
        </div>
      )}

      {!hideLayout && <Footer />}
    </div>
  );
}

export default App;
