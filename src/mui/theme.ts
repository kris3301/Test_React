import { createTheme } from "@mui/material/styles";
import { lightPalette } from "mui/defaultTheme/lightPalette";
import getComponents from "./components";

export const theme = createTheme({
  palette: lightPalette,
  components: getComponents(false),
});
