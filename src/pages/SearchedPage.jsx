import React from "react";
import { useParams } from "react-router-dom";
const SearchedPage = () => {
  const { sec } = useParams();
  return (
    <div>
      {sec}
      <div></div> SearchedPage
    </div>
  );
};

export default SearchedPage;
