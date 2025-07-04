import React from "react";
import { Link } from "react-router-dom";

function HomeSongThum(props) {
  let link = "/Song/" + props.id;
  //phone 2 = 90 = 40+40+   3.3*3
  return (
    <>
      <Link to={link}>
        <div className="text-white h-[50vw] w-[40vw] inline-flex flex-col ml-[3.3vw]">
          <img
            src={props.image}
            className="h-[40vw] w-[40vw] rounded-[1rem]"
          ></img>

          <div className="font-mono text-[1.1rem] mt-[0.2rem] h-[1.2rem] ">
            {props.titleShort.length > 18
              ? props.titleShort.slice(0, 19)
              : props.titleShort}
          </div>
          <div className="font-sans text-stone-500 text-[0.9rem]">
            {props.artistName}
          </div>
        </div>
      </Link>
    </>
  );
}

export default HomeSongThum;
