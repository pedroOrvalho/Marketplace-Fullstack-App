
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

import car from "../../images/clothes.jpg"
import { Link } from "react-router-dom";

export default function ChooseAList() {
  const theme = useTheme();

  return (
    <Link to="/user-review">
      <Card sx={{ display: "flex", width: 300 }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              Item for sale
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              create a listing for items you would like to sell
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={car}
          alt="Live from space album cover"
        />
      </Card>
    </Link>
  );
}
