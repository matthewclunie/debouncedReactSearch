import * as React from "react";
import { useState } from "react";
import "./SearchBarOLD.css";
// import SearchIcon from "@mui/icons-material/Search";
// import CancelIcon from "@mui/icons-material/Cancel";
// import PhotosData from "../src/Photo_Posts/PhotosData";
// import PhotoList from "../PhotoList";
import photos from "../Photo_Posts/photos.json";
import { Button } from "@mui/material";
import { Stack } from "@mui/material";

function SearchBarOLD({ placeholder }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState([""]);

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = photos.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else setFilteredData(newFilter);
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div
        className="searchInputs"
        sx={{
          margin: "20px",
          justifyContent: "center",
        }}
      >
        <input
          sx={{
            margin: "20px",
            justifyContent: "center",
          }}
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.map((photo) => {
            return (
              <a className="dataItem" href={photo.url}>
                <p>{photo.title}</p>
              </a>
            );
          })}
        </div>
      )}
      <Stack
        direction="row"
        spacing={2}
        // filterOptions={filterOptions}
        sx={{
          margin: "20px",
          justifyContent: "center",
        }}
      >
        <Button>Search</Button>
        <Button onClick={clearInput}>Clear</Button>
      </Stack>
    </div>
  );
}

export default SearchBarOLD;
