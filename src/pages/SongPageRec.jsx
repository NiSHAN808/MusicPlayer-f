import React from "react";

let img =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkL4WZvGAk07aV5n1YRnUnR0xGmciI1FLLZw&s";
const SongPageRec = () => {
  return (
    <>
      <div className="flex flex-row  w-[98vw] ">
        <div>
          <img
            src={img}
            className="h-[13vw] w-[13vw]
                 lg:h-[18vw] lg:w-[18vw] 
                  rounded-[1rem]"
          ></img>
        </div>
        <div className=" ml-[2vw]">
          <div className=" font-bold text-[5vw]">the song name</div>
          <div className="text-[3.5vw]">auther</div>
        </div>
      </div>
    </>
  );
};

export default SongPageRec;
