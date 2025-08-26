import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import Contact from "./assets/pages/Contact";
import Product from "./assets/pages/Product";
import ErrorPage from "./assets/pages/ErrorPage";
import Payment from "./assets/pages/Payment";
import BlogList from "./assets/pages/BlogList";
import SinglePost from "./assets/pages/SinglePost";

const yorkumisheaRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/product", element: <Product /> },
  { path: "*", element: <ErrorPage /> },
  { path: "/payment", element: <Payment /> },
  { path: "/blog", element: <BlogList /> },
  { path: "/blog/:slug", element: <SinglePost /> },

]);

export default function App() {
  return (
    <>
      <RouterProvider router={yorkumisheaRouter} />
      <ToastContainer />
    </>
  );
}