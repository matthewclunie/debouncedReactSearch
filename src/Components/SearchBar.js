import * as React from "react";
import photos from "../Photo_Posts/photos.json";
import { Autocomplete } from "@mui/material";
import StyledTextField from "../Styles/Component Styles/StyledTextField";
import StyledStack from "../Styles/Component Styles/StyledStack";
import StyledButton from "../Styles/Component Styles/StyledButton";

function SearchBar(props) {
  const { wordEntered, setWordEntered, setDebouncedWordEntered } = props;

  const handleClear = (e) => {
    setWordEntered("");
  };

  return (
    <form>
      <Autocomplete
        freeSolo
        placeholder="Search the dang album..."
        data={photos}
        inputValue={wordEntered}
        onInputChange={(_e, newInputValue) => {
          setWordEntered(newInputValue);
          setDebouncedWordEntered(newInputValue);
        }}
        options={photos.map((photo) => photo.title)}
        renderInput={(params) => (
          <StyledTextField {...params} label="search the dang album" />
        )}
      />
      <StyledStack>
        <StyledButton onClick={handleClear}>Clear</StyledButton>
      </StyledStack>
    </form>
  );
}

export default SearchBar;

// Rob's practice notes
// connect: text input in searchbar, going to affect the cards displayed in the grid.
// we need to filter photos based on text input from search bar.
