import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import 'primeicons/primeicons.css';
import router from "./routes";

import "primereact/resources/themes/lara-light-blue/theme.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <PrimeReactProvider value={{ unstyled: false }}>
      <RouterProvider router={router} />
    </PrimeReactProvider>
);
