import * as React from "react";
import photos from "../Photo_Posts/photos.json";
import { Autocomplete } from "@mui/material";
import StyledTextField from "../Styles/Component Styles/StyledTextField";

function SearchBar(props) {
  const { setDebouncedWordEntered } = props;

  return (
    <form>
      <Autocomplete
        freeSolo
        placeholder="Search the dang album..."
        data={photos}
        onInputChange={(_e, newInputValue) => {
          setDebouncedWordEntered(newInputValue);
        }}
        options={photos.map((photo) => photo.title)}
        renderInput={(params) => (
          <StyledTextField {...params} label="search the dang album" />
        )}
      />
    </form>
  );
}

export default SearchBar;

// Rob's practice notes
// connect: text input in searchbar, going to affect the cards displayed in the grid.
// we need to filter photos based on text input from search bar.
