import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";

const songLink =
  "https://cdnt-preview.dzcdn.net/api/1/1/e/4/5/0/e4589311b7cdd524d1767bc2b7b6e17f.mp3?hdnea=exp=1750045488~acl=/api/1/1/e/4/5/0/e4589311b7cdd524d1767bc2b7b6e17f.mp3*~data=user_id=0,application_id=42~hmac=bb724a3c6c64f2f399f2c66487cf363ee794542ac5d76f5447f0cf64fdfb15f0";

function Song() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState();

  const [playedMusic, setPlayedMusic] = useState();
  let audioRef = useRef();
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/track/${id}`)
      .then((res) => res.json()) //  setData(data)
      .then((data) => setData(data));
    //  audioRef.current.load();
    console.log(data);
    //audioRef.current.play();
  }, [search]);

  function handleMusicChange(index) {
    setPlayedMusic(data[index].music);
    console.log(data[index].name);
  }
  console.log(data);
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div className="inline-flex flex-col justify-center items-center h-[50vh] w-[100vw] lg:h-[100vh] Lg:w-[50vw] bg-pink-300  ">
          <div className="inline-flex  h-[30vw] w-[30vw] bg-red-300 ">
            {data?.album?.cover_medium ? (
              <img
                src={data.album.cover_medium}
                className="rounded-lg"
                alt="Album Cover"
                style={{ width: "30vw", aspectRatio: 1 }}
              />
            ) : null}
          </div>

          {/* <h1 className="text-[2.5vw]">{data[0].name}</h1> */}
          {data?.preview ? (
            <audio controls>
              <source src={data.preview} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          ) : null}
        </div>
        <div className="bg-blue-200 inline-flex h-[50vh] w-[100vw]  lg:h-[100vh]  Lg:w-[50vw] p-[2vw] ">
          {/* <ul className="bg-purple-200">
            {data.map((dat, index) => (
              <li
                key={index}
                className="text-[2rem] text-black cursor-pointer hover:bg-red-200"
                onClick={() => handleMusicChange(index)}
              >
                {dat.name}
              </li>
            ))}{" "}

          </ul> */}
        </div>
      </div>
    </>
  );
}

export default Song;
