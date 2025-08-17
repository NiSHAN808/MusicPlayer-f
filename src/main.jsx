import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import HomePage from "./pages/HomePage.jsx";
import Playlist from "./pages/Playlist.jsx";
import SearchedPage from "./pages/SearchedPage.jsx";
import Footer from "./pages/Footer.jsx";
import Song from "./pages/Song.jsx";
// import { GoogleOAuthProvider } from "@react-oauth/google";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Navbar from "./pages/Navbar.jsx";

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
      </>
    ),
  },
  {
    path: "/SearchedPage/:sec",
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
      </>
    ),
  },
]);
import { GoogleOAuthProvider } from "@react-oauth/google";
const clientId =
  "97028744224-0fn9qr0aiu5amhtid3n0hc6p508d7k6j.apps.googleusercontent.com";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </StrictMode>
);
