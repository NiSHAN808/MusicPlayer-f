import React, { useState, useRef, useEffect } from "react"

import Navbar from "./NavBar";

const songLink="https://cdnt-preview.dzcdn.net/api/1/1/e/4/5/0/e4589311b7cdd524d1767bc2b7b6e17f.mp3?hdnea=exp=1750045488~acl=/api/1/1/e/4/5/0/e4589311b7cdd524d1767bc2b7b6e17f.mp3*~data=user_id=0,application_id=42~hmac=bb724a3c6c64f2f399f2c66487cf363ee794542ac5d76f5447f0cf64fdfb15f0";

function Song() {
  const [data,setData]=useState([]);


  const [playedMusic, setPlayedMusic] = useState();
  let audioRef = useRef();



//   useEffect(() => {
//     fetch('http://localhost:5000/api/message')
//     .then(res => res.json()) //  setData(data)
//     .then(data =>   setData(data));
//     audioRef.current.load();

//     audioRef.current.play();
//   }, [playedMusic])

  function handleMusicChange(index) {
    setPlayedMusic(data[index].music);
    console.log(data[index].name);
  }

  return (
    
     <>
     <Navbar/>
      <div className="flex flex-col lg:flex-row">
        <div className='inline-flex flex-col justify-center items-center h-[50vh] w-[100vw] lg:h-[100vh] Lg:w-[50vw] bg-pink-300  '>
          <div className="inline-flex  h-[30vw] w-[30vw] bg-red-300 ">
  <img src="https://cdn-images.dzcdn.net/images/artist/bf74fc764097630ba58782ae79cfbee6/500x500-000000-80-0-0.jpg"
   className=" rounded-lg" style={{width: "30vw", aspectRatio: 1 / 1}} />
          </div>

          {/* <h1 className="text-[2.5vw]">{data[0].name}</h1> */}
          <audio controls ref={audioRef} autoPlay className="w-[20vw]">
            <source src={songLink} type="audio/mp3" autoPlay />

            Your browser does not support the audio element.
          </audio>
        </div>
        <div className="bg-blue-200 inline-flex h-[50vh] w-[100vw]  lg:h-[100vh]  Lg:w-[50vw] p-[2vw] ">
          <ul className="bg-purple-200">
            {data.map((dat, index) => <li key={index} className="text-[2rem] text-black cursor-pointer hover:bg-red-200"
              onClick={() => handleMusicChange(index)}>{dat.name}</li>)}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Song