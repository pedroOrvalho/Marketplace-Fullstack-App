import { TextField, Box, Divider, Stack, Chip } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StoreIcon from "@mui/icons-material/Store";
import FilterListIcon from "@mui/icons-material/FilterList";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import ChairIcon from "@mui/icons-material/Chair";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import CableIcon from "@mui/icons-material/Cable";

import {useState} from "react"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productActions } from "../../redux/slices/product";


export default function Market() {

  //*************** product Search***************/
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState("");
  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInput(event.target.value);
    dispatch(productActions.SearchProduct(userInput));
  }
 

  return (
    <div>
      <div className="side-bar">
        <h2>MarketPlace</h2>
        <TextField
          sx={{ width: 250, marginBottom: 1 }}
          className="productsearch"
          size="small"
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
          onChange={onChangeHandler}
        />
        <div className="sidebar-item-div">
          <Fab size="small" href="/products">
            <ShoppingCartIcon className="icon" />
          </Fab>
          <Link to="/product" className="link">
            <p> Buying</p>
          </Link>
        </div>
        <div className="sidebar-item-div">
          <Fab size="small" href="/store">
            <StoreIcon className="icon" />
          </Fab>
          <Link to="/store" className="link">
            <p> Selling</p>
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            backgroundColor: "#0898DC",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Fab href="/store" size="small" aria-label="add" color="primary">
            <AddIcon />
          </Fab>
          <p style={{ color: "white" }}>Create new listing</p>
        </div>

        <Divider variant="middle" />
        <div className="sidebar-item-div">
          <FilterListIcon />
          <h3> Flters</h3>
        </div>
        <div>
          <Box sx={{ m: 2 }}>
            <Stack direction="row" spacing={1}>
              <Chip label="price" />
              <Chip color="primary" label="size" />
              <Chip label="location" />
              <Chip label="title" />
            </Stack>
          </Box>
        </div>

        <Divider variant="middle" />

        <h3> Categories</h3>
        <div className="sidebar-item-div">
          <Fab size="small">
            <CheckroomIcon className="icon" />
          </Fab>
          <p>Clothing</p>
        </div>
        <div className="sidebar-item-div">
          <Fab size="small">
            <ChairIcon className="icon" />
          </Fab>
          <p>Furniture</p>
        </div>
        <div className="sidebar-item-div">
          <Fab size="small">
            <LocalGroceryStoreIcon className="icon" />
          </Fab>

          <p>Groceries</p>
        </div>
        <div className="sidebar-item-div">
          <Fab size="small">
            <CableIcon className="icon" />
          </Fab>
          <p>Electronics</p>
        </div>
        <Link to="/admin">
          <p>admin Dashboard</p>
        </Link>
      </div>
    </div>
  );
}
