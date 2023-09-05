import React from 'react'

import HouseIcon from "@mui/icons-material/House";

export default function Selling() {

  return (
    <div>
      <div className="selling">
        <p>
          <HouseIcon />
        </p>

        <h1 className="sell-on"> Selling on Marketplace </h1>
        <p className="interest_sell">
          Are you interested in selling on Marketplace? Marketplace makes it
          easy to sell things to
          <br />
          people in your local area. Here's more information about selling on
          Marketplace.
        </p>
        <button className="btn_sell"> Try Selling Something</button>
      </div>

      <div>
        <h2>
          What kind of seller are you?
        </h2>
      </div>
    </div>
  );
}
