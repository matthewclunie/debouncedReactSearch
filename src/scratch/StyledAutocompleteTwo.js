import * as React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledAutocompleteTwo = styled(Autocomplete)(({ theme }) => ({
  backgroundColor: "#92cbd1",
  borderRadius: "25px",
  width: "800px",
  marginTop: "30px",
  backgroundColor: "#92cbd1",
  borderRadius: "25px",
  width: "800px",
  marginTop: "30px",
  "& input": {
    textAlign: "center",
    fontSize: "22px",
  },
}));

export default function StyledCustomization() {
  return <StyledAutocompleteTwo />;
}
