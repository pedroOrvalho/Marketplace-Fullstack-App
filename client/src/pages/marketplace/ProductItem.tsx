import { Box } from "@mui/material";
import { Product } from "../../components/types/type";

type Prop = {
  item: Product;
};

export default function ProductItem({ item }: Prop) {
  return (
    <Box
      sx={{
        padding: 2,
        backgroundColor:"white"
      }}
    >
      <Box
        sx={{
          width: "100%",
          position: "relative",
          paddingBottom: "100%",
          backgroundColor: "gray",
          borderRadius: "20px",
        }}
      >
        <img
          src={item.image[0]}
          alt={item.title}
          style={{
            borderRadius: "20px",
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
          }}
        />
      </Box>
      <Box>
        <p>{item.price} kr</p>
        <p>{item.title}</p>
      </Box>
    </Box>
  );
}

/*

*/
