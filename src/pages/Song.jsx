import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import SongPageRec from "../Blocks/SongPageRec";

const songLink =
  "https://cdnt-preview.dzcdn.net/api/1/1/e/4/5/0/e4589311b7cdd524d1767bc2b7b6e17f.mp3?hdnea=exp=1750045488~acl=/api/1/1/e/4/5/0/e4589311b7cdd524d1767bc2b7b6e17f.mp3*~data=user_id=0,application_id=42~hmac=bb724a3c6c64f2f399f2c66487cf363ee794542ac5d76f5447f0cf64fdfb15f0";

function Song() {
  const [data, setData] = useState([]);
  const [dataRec, setDataRec] = useState([]);
  const [search, setSearch] = useState();

  const [playedMusic, setPlayedMusic] = useState();
  const audioRef = useRef(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/track/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));

    fetch("http://localhost:5000/deezer/chart")
      .then((res) => res.json())
      .then((data) => {
        setDataRec(data);
      });
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
    }
  }, [id]);

  function handleMusicChange(index) {
    setPlayedMusic(data[index].music);
    console.log(data[index].name);
  }

  function secondsToMinue(sec) {
    let time = Math.trunc(sec / 60);
    return `${time}:${sec - time * 60}`;
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div className="inline-flex flex-col justify-center items-center h-[50vh] w-full lg:h-[100vh] lg:w-[40vw] bg-purple-300  ">
          <div className="inline-flex  h-[30vw] w-[30vw] bg-blue-300 ">
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
            <audio autoPlay controls ref={audioRef}>
              <source src={data.preview} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          ) : null}
        </div>
        <div className="bg-stone-950 inline-flex flex-col h-fit w-full  lg:h-[100vh]  lg:w-[60vw] p-[2vw] lg:p-[1.1vw] overflow-scroll">
          {dataRec.tracks === undefined ? (
            <>loading</>
          ) : (
            dataRec.tracks.data.map((d, index) => (
              <div key={index} className=" ">
                <SongPageRec
                  id={d.id}
                  playedId={id}
                  img={d.album.cover_medium}
                  title={d.title}
                  artist={d.artist.name}
                  duration={secondsToMinue(d.duration)}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Song;
