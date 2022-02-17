import { TextField } from "@mui/material";
import { styled } from "@mui/system";

const StyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: "#92cbd1",
  borderRadius: "25px",
  width: "800px",
  marginTop: "30px",
  "& input": {
    textAlign: "center",
    fontSize: "22px",
  },
}));

export default StyledTextField;
