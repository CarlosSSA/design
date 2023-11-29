import { createTheme } from "@mui/material";

export const ui_colors = {
  primary: "#040D12",
  red: "#D80032",
  "bg-1": "#f9f9f9",
};
export const size_fill = "-webkit-fill-available";

export const theme = createTheme({
  palette: { primary: { main: ui_colors.primary } },
  typography: {
    fontFamily: `'Open Sans', sans-serif`,
    body1: {
      fontSize: 14,
    },
    body2: {
      fontSize: 16,
    },
  },
});
