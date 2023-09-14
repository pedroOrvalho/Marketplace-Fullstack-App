import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

import car from "../../images/cars.jpg";
import { Link } from "react-router-dom";

export default function ChooseSecondListing() {
  const theme = useTheme();

  return (
    <Link to="/user-review">
      <Card sx={{ display: "flex", width: 300, height:200, }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              cars for sale
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              create a listing for cars you would like to sell
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
