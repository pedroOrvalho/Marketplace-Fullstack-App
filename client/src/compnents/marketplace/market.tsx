import React from "react";
import { TextField, Button, Divider } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StoreIcon from "@mui/icons-material/Store";
import FilterListIcon from "@mui/icons-material/FilterList";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import ChairIcon from "@mui/icons-material/Chair";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import CableIcon from "@mui/icons-material/Cable";

export default function Market() {
  return (
    <div>
      <div className="side-bar">
        <h2>MarketPlace</h2>
        <TextField
          style={{
            width: "90%",
            marginBottom: "18px",
          }}
          size="small"
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
        />
        <div className="sidebar-item-icon">
          <ShoppingCartIcon className="icon" />
          <Button> Buying</Button>
        </div>
        <div className="sidebar-item-icon">
          <StoreIcon className="icon" />
          <Button>Selling</Button>
        </div>

        <div>
          <Fab size="small" color="secondary" aria-label="add">
            <AddIcon />
          </Fab>
          <Button>Create new listing</Button>
        </div>

        <Divider variant="middle" />

        <div className="sidebar-item-icon">
          <FilterListIcon />
          <h3> Flters</h3>
        </div>
        <div>....</div>
        <Divider variant="middle" />
        <h3> Categories</h3>
        <div className="sidebar-item-icon">
          <CheckroomIcon className="icon" />
          <Button>clothing</Button>
        </div>
        <div className="sidebar-item-icon">
          <ChairIcon className="icon" />
          <Button>Furniture</Button>
        </div>
        <div className="sidebar-item-icon">
          <LocalGroceryStoreIcon className="icon" />
          <Button>Groceries</Button>
        </div>
        <div className="sidebar-item-icon">
          <CableIcon className="icon" />
          <Button>Electronics</Button>
        </div>
      </div>
    </div>
  );
}
