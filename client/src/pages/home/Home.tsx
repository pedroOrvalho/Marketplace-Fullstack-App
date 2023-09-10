import HomeCarrousel from "../../components/Home/HomeCarrousel";
import HomeBanner from "../../components/Home/HomeBanner";

import { Box } from "@mui/material";
import HomeInfo from "../../components/Home/HomeInfo";

export default function Home() {
  return (
    <Box
      className="home_container"
      sx={{ display: "flex", flexDirection: "column" }}
    >
      <HomeBanner />
      <HomeCarrousel />
      <HomeInfo/>
    </Box>
  );
}
