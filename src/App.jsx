import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Error from "./components/Error";
import MyExperience from "./pages/MyExperience";
import MyProjects from "./pages/MyProjects";

// Defining the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <Error />,
  },
  {
    path: "/experience",
    element: <MyExperience />,
    errorElement: <Error />,
  },
  {
    path: "/projects",
    element: <MyProjects />,
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
