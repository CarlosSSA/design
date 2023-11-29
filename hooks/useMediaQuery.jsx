import { useMediaQuery } from "@mui/material";
const useAppMediaQuery = (w) => useMediaQuery(`(max-width:${w}px)`);
export default useAppMediaQuery;
