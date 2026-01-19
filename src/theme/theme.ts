import { createTheme } from "@mui/material/styles";
import { palette } from "./palette";
import { typography } from "./typography";
import { components } from "./components";

const theme = createTheme({
  components,
  cssVariables: true,
  palette,
  shape: {
    borderRadius: 0,
  },
  typography,
});

export default theme;
