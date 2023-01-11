import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Joke from "./pages/joke";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="max-w-[768px] mx-auto px-10 pt-5">
          <Navbar />
          <Home />
          <Footer />
        </div>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
