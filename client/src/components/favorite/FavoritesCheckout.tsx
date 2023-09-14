
import { Link } from "react-router-dom";


import { Box, Button  } from "@mui/material";

export default function FavoritesCheckout() {


  return (
    <Box sx={{ m: 3 }}>
      <Link to="/favorite">
        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
            borderRadius: "0",
            textTransform: "capitalize",
            letterSpacing: "0.2rem",
            fontSize: "1rem",
            bgcolor: "hsla(10, 47%, 67%, 0.957)",
            "&:hover": {
              bgcolor: "hsla(10, 47%, 77%, 0.957)",
            },
          }}
        >
          Checkout
        </Button>
      </Link>
    </Box>
  );
}
