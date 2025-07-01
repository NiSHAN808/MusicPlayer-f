import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import HomePage from "./pages/HomePage.jsx";
import Playlist from "./pages/Playlist.jsx";
import SearchedPage from "./pages/SearchedPage.jsx";
import Footer from "./pages/Footer.jsx";
import Song from "./pages/Song.jsx";

import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Navbar from "./pages/NavBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <HomePage />
        <Footer />
      </>
    ),
  },

  {
    path: "/playlist",
    element: (
      <>
        <Navbar />
        <Playlist />
        <Footer />
      </>
    ),
  },
  {
    path: "/SearchedPage",
    element: (
      <>
        <Navbar />
        <SearchedPage />
        <Footer />
      </>
    ),
  },
  {
    path: "/Song/:id",
    element: (
      <>
        <Navbar />
        <Song />
        <Footer />
      </>
    ),
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
