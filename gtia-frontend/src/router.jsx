import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const HomeV2 = lazy(() => import("./pages/HomeV2"));
const About = lazy(() => import("./pages/About"));
const Events = lazy(() => import("./pages/Events"));

const withSuspense = (Component) => (
  <Suspense fallback={null}>
    <Component />
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: withSuspense(Home),
  },
  {
    path: "/v2",
    element: withSuspense(HomeV2),
  },
  {
    path: "/about",
    element: withSuspense(About),
  },
  {
    path: "/events",
    element: withSuspense(Events),
  },
]);

export default router;
