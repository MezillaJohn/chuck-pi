import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import RoadMap from "./pages/RoadMap";
import WhitePaper from "./pages/WhitePaper";
import Tokenomics from "./pages/Tokenomics";
import HowToBuy from "./pages/HowToBuy";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/how-to-buy",
        element: <HowToBuy />,
      },
      {
        path: "/roadmap",
        element: <RoadMap />,
      },
      {
        path: "/whitepaper",
        element: <WhitePaper />,
      },
      {
        path: "/tokenomics",
        element: <Tokenomics />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
