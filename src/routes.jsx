import { createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import Homepage from "./pages/Homepage/index.jsx";
import PinjamRuangan from "./pages/PinjamRuangan/index.jsx";
import JadwalRuangan from "./pages/JadwalRuangan/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Homepage />,
      },
      {
        path: "/pinjam-ruangan",
        element: <PinjamRuangan />,
      },
      {
        path: "/jadwal-ruangan",
        element: <JadwalRuangan />,
      },
    ],
  },
]);

export default router;
