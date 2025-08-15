import "./Navbarstyle.css";
import React, { useRef, useState } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router-dom";
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
  // function onCh() {
  //   // setSecTxt(input.current.value);
  // }
  const handleKeyDown = (e) => {
    setSecTxt((prev) => prev + e);
    if (e.key === "Enter") {
      navigate(`/SearchedPage/${secTxt}`); // redirect
      // Or: window.open("https://example.com", "_blank"); // open in new tab
    }
  };

  return (
    <>
      <nav className="bg-black h-[10vw] flex justify-between items-center sticky top-0 lg:h-13  ">
        <div onClick={handleHamClick} className="hidden hamburger z-5 mr-[5vw]">
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
            className="inline-flex justify-center h-fit  inline w-[40vw] h-[10vw] overflow-hidden   p-[1vw]  "
          >
            <img
              loading="lazy"
              src="../logo/NishanBeats.png"
              className=" h-[8vw] lg:h-[3.5vw] xl:h-[2.5vw] 2xl:h-[1.8vw]"
            />
          </Link>
        </div>

        <div color=" inline-flex flex-row searchBox ">
          <input
            type="text"
            placeholder="Search..."
            className="w-[27vw] md:w-[15vw] pl-[0.3rem] rounded-full border border-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            ref={input}
            onChange={(e) => setSecTxt(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Link to={`/SearchedPage/${secTxt}`}>
            <button className=" text-gray-500 hover:text-blue-500">🔍</button>
          </Link>{" "}
        </div>

        <div ref={pages} className="pages w-[40vw] flex justify-around">
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

        <div>
          {user === null ? (
            <button className="bg-white rounded-full py-1 px-3 hover:bg-stone-400">
              Sign in
            </button>
          ) : (
            <img alt="img"></img>
          )}
        </div>
      </nav>
    </>
  );
}
export default Navbar;
