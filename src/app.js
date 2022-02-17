import * as React from "react";
import PhotoList from "./Photo_Posts/PhotoList";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import photos from "./Photo_Posts/photos.json";
import { useState, useCallback } from "react";
import StyledPaper from "./Styles/Component Styles/StyledPaper";

const filteredPhotos = (param) => {
  if (param.length < 3) {
    return photos;
  }
  const filteredArray = photos.filter((value) => {
    return value.title.toLowerCase().includes(param.toLowerCase());
  });

  return filteredArray;
};
function debounce(fn, delay) {
  let timeout = null;
  return function (...args) {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    timeout = setTimeout(function () {
      fn(...args);
    }, delay);
  };
}

function App() {
  const [wordState, setWordState] = useState("");
  const [debouncedWordState, setDebouncedWordState] = useState("");
  const debouncedSetDebouncedWordState = useCallback(
    debounce(setDebouncedWordState, 1000),
    [setDebouncedWordState]
  );
  return (
    <StyledPaper>
      <Header />
      {/* <SearchBar
        setDebouncedWordEntered={debouncedSetDebouncedWordState}
        wordEntered={wordState}
        setWordEntered={setWordState}
      /> */}
      <PhotoList details={filteredPhotos(debouncedWordState)} />
    </StyledPaper>
  );
}

export default App;
