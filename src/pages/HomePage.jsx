import React, { useState, useEffect } from "react";
import HomeSongThum from "../Blocks/HomeSongThum";

function SongsForYou() {
  return (
    <>
      <div>songs for you</div>
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
  console.log(songsData);
  return (
    <div className="bg-black text-white">
      <SongsForYou />
      <div className="">
        {songsData === undefined ? (
          <>nothing</>
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
  );
};

export default HomePage;
