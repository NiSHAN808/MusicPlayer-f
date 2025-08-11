import React from "react";
import { Link } from "react-router-dom";

function HomeSongThum(props) {
  let link = "/Song/" + props.id;
  //phone 2 = 90 = 40+40+   3.3*3
  return (
    <>
      <Link to={link}>
        <div
          className="text-white  w-[45vw] mt-[0.5rem]
        md:h-[32vw] md:w-[25vw] 
             lg:h-[24vw] lg:w-[18vw] 
        inline-flex flex-col ml-[3.3vw]"
        >
          <img
            src={props.image}
            className="h-[45vw] w-[45vw] md:h-[25vw] md:w-[25vw]
                 lg:h-[18vw] lg:w-[18vw] 
                  rounded-[1rem]"
          ></img>

          <div className="font-mono text-[0.9rem]   h-[1.1rem] overflow-hidden ">
            {props.titleShort.length > 18
              ? props.titleShort.slice(0, 19)
              : props.titleShort}
          </div>
          <div className="font-sans text-stone-500 h-[1rem] text-[0.7rem] overflow-hidden">
            {props.artistName}
          </div>
        </div>
      </Link>
    </>
  );
}

export default HomeSongThum;
