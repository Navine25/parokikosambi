import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { Toast } from "primereact/toast";

import { createContext, useRef, useEffect } from "react";

export const ContextToast = createContext(null);

function App() {
  const location = useLocation();

  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home");
    }
  }, []);

  const toast = useRef(null);

  return (
    <>
      <ContextToast.Provider value={toast}>
        <Toast ref={toast} />
        <Header />
        <Outlet />
      </ContextToast.Provider>
    </>
  );
}

export default App;
