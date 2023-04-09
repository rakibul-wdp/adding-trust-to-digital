import { RouterProvider } from "react-router-dom"
import { router } from "./routes/routes"
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
