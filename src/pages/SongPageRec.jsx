import React from "react";

let img =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkL4WZvGAk07aV5n1YRnUnR0xGmciI1FLLZw&s";
const SongPageRec = (props) => {
  console.log(typeof props.id, typeof props.playedId);
  return (
    <>
      <div
        className={`flex flex-row w-[93vw] h-[13vw] text-white relative mb-[2vw] ${
          props.id == props.playedId ? "bg-stone-900" : ""
        }`}
      >
        <div>
          <img
            src={props.img}
            className="h-[13vw] w-[13vw]4
                 lg:h-[18vw] lg:w-[18vw] 
                  rounded-[1rem]"
          ></img>
        </div>
        <div className=" ml-[2vw]">
          <div className=" font-bold text-[4.5vw]">{props.title}</div>
          <div className="text-[3.5vw]">{props.artist}</div>
        </div>
        <div className="bg-red absolute right-0 inline-flex justify-center items-center h-full p-[3vw]">
          {props.duration}
        </div>
      </div>
    </>
  );
};

export default SongPageRec;
