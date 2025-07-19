import React from "react";

let img =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkL4WZvGAk07aV5n1YRnUnR0xGmciI1FLLZw&s";
const SongPageRec = (props) => {
  return (
    <>
      <div className="flex flex-row  w-[92vw]  h-[13vw] bg-purple-300 relative">
        <div>
          <img
            src={props.img}
            className="h-[13vw] w-[13vw]
                 lg:h-[18vw] lg:w-[18vw] 
                  rounded-[1rem]"
          ></img>
        </div>
        <div className=" ml-[2vw]">
          <div className=" font-bold text-[4.5vw]">{props.title}</div>
          <div className="text-[3.5vw]">auther</div>
        </div>
        <div className="bg-red absolute right-0 inline-flex justify-center items-center h-full p-[3vw]">
          2:56
        </div>
      </div>
    </>
  );
};

export default SongPageRec;
