import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
// import { createFilterOptions } from "@mui/material/Autocomplete";

import photos from "../Photo_Posts/photos.json";

export default function SearchBarButtons() {
  // const filterOptions = createFilterOptions({
  //   matchFrom: "start",
  //   stringify: (option) => option.title,
  // });

  return (
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
      <Button>Clear</Button>
    </Stack>
  );
}
