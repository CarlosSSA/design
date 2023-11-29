import { Box, Stack } from "@mui/material";
import { size_fill, ui_colors } from "../theme/theme";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Card from "../components/Card";
import useAppMediaQuery from "../hooks/useMediaQuery";
import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";

function App() {
  const w740 = useAppMediaQuery(740);
  const w657 = useAppMediaQuery(657);

  return (
    <Stack height={"100vh"}>
      <Navbar />
      <Box
        height={size_fill}
        width={"100vw"}
        sx={{ overflowY: "auto", overflowX: "hidden" }}
        bgcolor={w657 ? "#fff" : ui_colors["bg-1"]}
      >
        <Box maxWidth={800} mx={"auto"} p={w657 ? 0 : w740 ? 1 : 3}>
          <Grid2 container spacing={w740 ? 2 : 3}>
            {[...Array(10)].map((value, i) => {
              return <Card key={"a" + i} />;
            })}
          </Grid2>
        </Box>
      </Box>
      <BottomNav />
    </Stack>
  );
}

export default App;
