
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import axios from "axios";




export default function UserPreviewSidebar({submitProduct,
          changeImage,
          changeTitle,
          userInput,
          changePrice,
          changeDescription,
          changeCategory}:any) {
  
const createProduct = ( ) => {
  const userData = localStorage.getItem("_id");

   const token =localStorage.getItem("userToken")
 console.log(userData)
 console.log(token)
 console.log(userInput)
  
  const url = `http://localhost:7000/product/${userData}`;

axios
  .post(url, userInput, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  .then((data) => {
    console.log(data.data);
    console.log("Product created successfully!");
  })
  .catch((error) => {
    console.error("Error creating product:", error);
  });
};


  return (
    <div>
      <p>market</p>
      <h3>sell anything of your choice</h3>
      <p>user profile will go here</p>
      <div>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="outlined-multiline-flexible"
              label="title"
              multiline
              maxRows={4}
              onChange={changeTitle}
            />
            <TextField
              id="outlined-textarea"
              label="price"
              placeholder="description"
              multiline
              onChange={changePrice}
            />
            <TextField
              id="outlined-textarea"
              label="category"
              placeholder="description"
              multiline
              onChange={changeCategory}
            />
            <TextField
              id="outlined-multiline-static"
              label="description"
              multiline
              rows={4}
              defaultValue="Default Value"
              onChange={changeDescription}
            />
            <div style={{ width: "300" }}>
              <input
                type="file"
                accept="image/*"
                placeholder="upload an image"
                onChange={changeImage}
              />
            </div>
          </div>
        </Box>

        <Stack spacing={2} direction="row" sx={{ marginTop: "30px" }}>
          <Button variant="contained" onClick={submitProduct}>
           Preview
          </Button>
          <Button variant="contained" onClick={createProduct}>Post</Button>
          <Button variant="outlined">Edit</Button>
        </Stack>
      </div>
    </div>
  );
}
