import "./Navbarstyle.css";
import React, { useRef, useState } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

function Navbar(props) {
  const user = JSON.parse(localStorage.getItem("user"));

  let pageStyle = useRef(0);
  const pages = useRef(0);
  let input = useRef();

  const [secTxt, setSecTxt] = useState();

  function handleHamClick() {
    if (pageStyle.current === 0) {
      pages.current.style.display = "flex";
      pageStyle.current = 1;
    } else {
      pages.current.style.display = "none";
      pageStyle.current = 0;
    }
  }
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    setSecTxt((prev) => prev + e);
    if (e.key === "Enter") {
      navigate(`/SearchedPage/${secTxt}`);
    }
  };

  // const login = useGoogleLogin({
  //   onSuccess: async (tokenResponse) => {
  //     const userInfo = await fetch(
  //       "https://www.googleapis.com/oauth2/v3/userinfo",
  //       {
  //         headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
  //       }
  //     ).then((res) => res.json());

  //     console.log("Google user info:", userInfo);
  //     localStorage.setItem("user", JSON.stringify(userInfo));
  //     navigate("/");
  //   },
  //   ux_mode: "redirect",
  //   redirect_uri: "http://localhost:5173",
  //   onError: (error) => {
  //     console.log("Login Failed:", error);
  //   },
  // });

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const userInfo = await fetch(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        }
      ).then((res) => res.json());

      console.log(tokenResponse);

      // Send to backend
      const response = await fetch(
        "http://localhost:5000/api/users/google-login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userInfo),
        }
      );

      console.log(response);

      const savedUser = await response.json();
      console.log("User saved in DB:", savedUser);

      // store locally if needed
      localStorage.setItem("user", JSON.stringify(savedUser));
      navigate("/");
    },
  });

  return (
    <>
      <nav className="z-5 bg-black h-[10vw] flex justify-between items-center sticky top-0 lg:h-13  ">
        {/* hamburger and logo */}
        <div className="w-[40vw] md:w-p[] inline-flex  justify-center items-center">
          <div
            onClick={handleHamClick}
            className="hidden hamburger z-5 mr-[1vw] mt-[1.5vw] lg:m-[1vw]"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="white"
              strokeWidth="10"
              strokeLinecap="round"
            >
              <line x1="20" y1="30" x2="80" y2="30" />
              <line x1="20" y1="50" x2="80" y2="50" />
              <line x1="20" y1="70" x2="80" y2="70" />
            </svg>
          </div>

          <div className="logo">
            <Link
              to="/"
              className="inline-flex justify-center h-fit  inline w-[20vw] h-[10vw] overflow-hidden   p-[1vw]  "
            >
              <img
                loading="lazy"
                src="../logo/NishanBeats.png"
                className=" h-[8vw] lg:h-[3.5vw] xl:h-[2.5vw] 2xl:h-[1.8vw]"
              />
            </Link>
          </div>
        </div>
        {/*search bar*/}
        <div className=" inline-flex items-center flex-row searchBox ">
          <input
            type="text"
            placeholder="Search..."
            className="w-[27vw] md:w-[15vw] pl-[0.3rem] rounded-full border border-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            ref={input}
            onChange={(e) => setSecTxt(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Link to={`/SearchedPage/${secTxt}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 ml-[0.5vw]"
            >
              <path
                d="m29.43 25.39-6.9-6.9A10.86 10.86 0 0 0 24 13a11 11 0 1 0-5.5 9.52l6.91 6.9a2.06 2.06 0 0 0 1.48.59 3.18 3.18 0 0 0 2.17-1 2.6 2.6 0 0 0 .37-3.62zm-11-5.18A8.89 8.89 0 0 1 13 22a9 9 0 1 1 7.23-3.65 9.33 9.33 0 0 1-1.85 1.86zm9.26 7.41a1 1 0 0 1-.82.38l-6.66-6.65-.05-.05 1.2-1.2h.05L28 26.79a1 1 0 0 1-.36.83z"
                style={{ fill: "#8834e0" }}
              />
            </svg>
          </Link>{" "}
        </div>
        {/* pages */}{" "}
        <div ref={pages} className="pages w-[20vw] flex justify-around">
          <Link
            to="/Playlist"
            className="hover:text-purple-700 md:text-[3.5vw] text-white lg:text-[2vw] xl:text-[1.9vw]"
            onClick={handleHamClick}
          >
            Playlist
          </Link>
          <Link
            to="/SearchedPage"
            className="hover:text-purple-700 md:text-[3.5vw] text-white lg:text-[2vw] xl:text-[1.9vw]"
            onClick={handleHamClick}
          >
            pin
          </Link>
        </div>
        {/* google sign in */}{" "}
        <div>
          {user === null ? (
            <button
              onClick={() => login()}
              className="bg-white rounded-full py-1 px-3 hover:bg-purple-700 mr-[2vw]"
            >
              Sign in
            </button>
          ) : (
            <img
              className="rounded-full h-8 mr-[2vw]"
              src={user.picture}
              alt="img"
            ></img>
          )}
        </div>
      </nav>
    </>
  );
}
export default Navbar;
