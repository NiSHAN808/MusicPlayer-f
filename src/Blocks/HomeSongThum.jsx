import React from "react";

let tempIm = "https://api.deezer.com/artist/4401431/image";
let tempTl = "Ayushi the Music";
let tempAt = "Subverso";
const HomeSongThum = () => {
  return (
    <div>
      <>
        <div className=" h-60 w-50">
          <img src={tempIm} className="h-50 w-50 rounded-[1rem]"></img>

          <div className="font-mono text-[1rem] mt-[0.2rem] h-[0.9rem]">
            {tempTl}
          </div>
          <div className="font-sans">{tempAt}</div>
        </div>
      </>
    </div>
  );
};

export default HomeSongThum;
