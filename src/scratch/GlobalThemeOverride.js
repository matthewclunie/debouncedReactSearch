import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Paper } from "@mui/material";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#1f1f1f",
          padding: "10px",
          textAlign: "center",
        },
      },
    },
  },
});

export default function GlobalThemeOverride() {
  return (
    <ThemeProvider theme={theme}>
      <Paper />
    </ThemeProvider>
  );
}
