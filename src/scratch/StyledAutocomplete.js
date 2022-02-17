// import styled from "@emotion/styled/types/base";
import { styled } from "@mui/system";
import { Autocomplete } from "@mui/material";

/* ERROR: Module not found: Error: Can't resolve '@emotion/styled/types/base' 
in 'C:\Users\matth\Documents\WA2106\Work Stuff\react_stuff\react4\src\Components' */

// Is {styled} from mui right, and styled from @emotion wrong?
//Could you do '&input: ' from a module.css?

//-----------------------------------------------------------------------

//Styled-Component Method of adding CSS
const StyledAutocomplete = styled(Autocomplete)`
backgroundColor: "#92cbd1",
border-radius: "25px",
width: "800px",
marginTop: "30px",
"& input": {
  textAlign: "center",
  fontSize: "22px",
`;

export default StyledAutocomplete;
