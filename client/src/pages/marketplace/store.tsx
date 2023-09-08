import {Paper, Button} from "@mui/material/"
import Fab from "@mui/material/Fab/Fab";
import AddIcon from "@mui/icons-material/Add";


export default function UserStore() {
    return (
      <div className="product-div product">
        <h3>My Store</h3>

        <Paper className="addlistings">
          <Fab size="small" color="secondary" aria-label="add">
            <AddIcon />
          </Fab>
          <Button>Create new listing</Button>
        </Paper>
      </div>
    ); 
}