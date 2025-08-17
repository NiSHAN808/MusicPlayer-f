import React, { useState, useEffect } from "react";
import { data, useParams } from "react-router-dom";
import HomeSongThum from "../Blocks/HomeSongThum";

//https://musicplayer-s.onrender.com

const SearchedPage = () => {
  const { sec } = useParams();
  console.log(sec);
  const [songsData, setSongsData] = useState();
  const [lodings, setLoading] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:5000/search/${sec}`) //for local
      //    fetch(`https://musicplayer-s.onrender.com/search/${sec}`)
      .then((res) => res.json())
      .then((response) => {
        setSongsData(response.data);
        setLoading(false);
        console.log(typeof response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        setLoading(false);
      });
  }, [sec]);
  useEffect(() => {
    console.log("Updated Songs Data:", songsData);
  }, [songsData]);

  return (
    <div className="bg-black">
      {sec}
      <div></div>
      <div className="w-full inline-flex justify-center ">
        <div className="w-full ">
          {songsData === undefined ? (
            <>loading</>
          ) : (
            songsData.map((d, index) => (
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

export default SearchedPage;
