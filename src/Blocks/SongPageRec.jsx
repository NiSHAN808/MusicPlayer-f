import React from "react";
import { Link } from "react-router-dom";
const SongPageRec = (props) => {
  let link = "/Song/" + props.id; //id and plyedId there are 2 plyedId is same for all because it is the id of playing song

  return (
    <>
      <Link to={link}>
        <div
          className={`flex flex-row w-[93vw] lg:w-full h-[13vw] lg:h-[8vw] text-white relative mb-[2vw] lg:mb-[1.1vw] ${
            props.id == props.playedId ? "bg-stone-900" : ""
          }`}
        >
          <div>
            <img
              src={props.img}
              className="h-[13vw] w-[13vw]4
                 lg:h-[8vw] lg:w-[8vw] 
                  rounded-[1rem]"
            ></img>
          </div>
          <div className=" ml-[2vw]">
            <div className=" font-bold  text-[4.5vw] lg:text-[2.5vw]  overflow-hidden h-[6vw] lg:h-[4vw]">
              {props.title}
            </div>
            <div className=" text-[3.5vw] lg:text-[2vw]">{props.artist}</div>
          </div>
          <div className="bg-red absolute right-0 inline-flex justify-center items-center h-full p-[3vw]">
            {props.duration}
          </div>
        </div>
      </Link>
    </>
  );
};

export default SongPageRec;
