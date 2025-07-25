import React, { useState, useEffect } from "react";
import HomeSongThum from "../Blocks/HomeSongThum";

function SongsForYou() {
  return (
    <>
      <div className=" text-[7vw] w-[90vw] ml-[5vw] h-[20vw] inline-flex items-end mb-[2vw] ">
        songs for you
      </div>
    </>
  );
}
const HomePage = () => {
  const [songsData, setSongsData] = useState();
  const [lodings, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/deezer/chart")
      .then((res) => res.json())
      .then((data) => {
        setSongsData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-black text-white">
      <SongsForYou />
      <div className="w-full inline-flex justify-center ">
        <div className="w-[90vw] ">
          {songsData === undefined ? (
            <>loading</>
          ) : (
            songsData.tracks.data.map((d, index) => (
              <div className="inline-flex" key={index}>
                <HomeSongThum
                  titleShort={d.title_short}
                  artistName={d.artist.name}
                  image={d.album.cover_medium}
                  preview={d.preview}
                  id={d.id}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
