import * as React from "react";
import { styled } from "@mui/system";
import { Button } from "@mui/material";
import { Stack } from "@mui/material";

//Styled-Component Method of adding CSS
const StyledStack = styled(Stack)(({ theme }) => ({
  margin: "20px",
  justifyItems: "center",
  width: "40px",
}));

export default function StyledCustomization() {
  return <StyledStack>Clear</StyledStack>;
}
