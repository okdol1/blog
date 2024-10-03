import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages";
import PAGES from "@/constants/page";

const router = createBrowserRouter([
  {
    path: PAGES.PAGE_HOME,
    element: <HomePage />,
  },
]);

export default router;
