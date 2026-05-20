import "./App.css";
import { Header } from "./pages/Header/Header";
import { Routers } from "./utils/Routers";
import { Footer } from "./pages/Footer/Footer";
import { useLocation } from "react-router-dom";
import { Login } from "./pages/LoginRegister/Login";
import { Register } from "./pages/LoginRegister/Register";

function App() {
  const location = useLocation();
  if (location.pathname === "/login") {
    return <Login />;
  } else if (location.pathname === "/register") {
    return <Register />;
  }

  return (
    <div>
      <Header />
      <div className="max-w-[1440px] mx-auto px-4">
        <Routers />
      </div>
    </div>
  );
}

export default App;
