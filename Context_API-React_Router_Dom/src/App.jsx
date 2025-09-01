import { createBrowserRouter, RouterProvider } from "react-router";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { AppLayout } from "./Layout/AppLayout";
import { Movies } from "./pages/Movies";
import { getMovieData, getMovieDataDetailed } from "./api/getMovieData";
import { MoviesDetail } from "./pages/MovieDetail";
export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/movies",
          element: <Movies />,
          loader: getMovieData,
        },
        {
          path: "/movies/:movieId",
          element: <MoviesDetail />,
          loader: getMovieDataDetailed,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
