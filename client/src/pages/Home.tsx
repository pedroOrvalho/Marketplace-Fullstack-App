import HomeCarrousel from "../components/Home/HomeCarrousel";
import HomeBanner from "../components/Home/HomeBanner";
import HomeInfo from "../components/Home/HomeInfo";

import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box
      className="home_container"
      sx={{ display: "flex", flexDirection: "column" }}
    >
      <HomeBanner />
      <HomeCarrousel />
      <HomeInfo />
    </Box>
  );
}
