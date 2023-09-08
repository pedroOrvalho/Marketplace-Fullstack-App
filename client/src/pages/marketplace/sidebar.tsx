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
import { Link } from "react-router-dom";

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
        <div className="sidebar-item-div">
          <Fab>
            <ShoppingCartIcon className="icon" />
          </Fab>
          <Link to="/marketplace/products">
            <Button> Buying</Button>
          </Link>
        </div>
        <div className="sidebar-item-div">
          <Fab>
            <StoreIcon className="icon" />
          </Fab>
          <Link to="/store">
            <Button> Selling</Button>
          </Link>
        </div>

        <div>
          <Fab size="small" color="secondary" aria-label="add">
            <AddIcon />
          </Fab>
          <Button>Create new listing</Button>
        </div>

        <Divider variant="middle" />

        <div className="sidebar-item-div">
          <FilterListIcon />
          <h3> Flters</h3>
        </div>
        <div>....</div>
        <Divider variant="middle" />
        <h3> Categories</h3>
        <div className="sidebar-item-div">
          <Fab>
            <CheckroomIcon className="icon" />
          </Fab>
          <Button>clothing</Button>
        </div>
        <div className="sidebar-item-div">
          <Fab>
            <ChairIcon className="icon" />
          </Fab>
          <Button>Furniture</Button>
        </div>
        <div className="sidebar-item-div">
          <Fab>
            <LocalGroceryStoreIcon className="icon" />
          </Fab>

          <Button>Groceries</Button>
        </div>
        <div className="sidebar-item-div">
          <Fab>
            <CableIcon className="icon" />
          </Fab>

          <Button>Electronics</Button>
        </div>
      </div>
    </div>
  );
}
