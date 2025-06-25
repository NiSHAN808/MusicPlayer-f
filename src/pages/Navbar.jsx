import "./Navbarstyle.css";
import React, { useRef, useState } from "react";
import { Link } from "react-router";
function Navbar(props) {
  let pageStyle = useRef(0);
  const pages = useRef(0);
  let input = useRef();
  function handleHamClick() {
    if (pageStyle.current === 0) {
      pages.current.style.display = "flex";
      pageStyle.current = 1;
    } else {
      pages.current.style.display = "none";
      pageStyle.current = 0;
    }
  }
  let link = "/";

  function handleSearchButtonClick() {
    console.log("clicked");
    console.log(input.current.value);
    props.setSearch(input.current.value);
  }
  return (
    <>
      <nav className="bg-black h-[10vw] flex justify-between items-center sticky top-0 lg:h-13  ">
        <div className="logo">
          <Link
            to={link}
            className="inline-flex justify-center h-fit  inline w-[40vw] h-[10vw] overflow-hidden   p-[1vw]  "
          >
            <img
              loading="lazy"
              src="../logo/NishanBeats.png"
              className=" h-[8vw] lg:h-[3.5vw] xl:h-[2.5vw] 2xl:h-[1.8vw]"
            />
          </Link>
        </div>
        <div color=" flex searchBox">
          <input
            type="text"
            placeholder="Search..."
            className=" rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            ref={input}
          />
          <button
            className=" text-gray-500 hover:text-blue-500"
            onClick={handleSearchButtonClick}
          >
            🔍
          </button>
        </div>

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
      </nav>
    </>
  );
}
export default Navbar;
