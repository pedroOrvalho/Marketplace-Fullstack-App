import React from "react";
import Sidebar from "../marketplace/sidebar";
import "./style.css";
import cars from "../../images/cars.jpg";
import ChooseAList from "../../components/create-listing/ChooseAList";
import ChooseSecondListing from "../../components/create-listing/ChooseSecondListing";

export default function CreateListing() {
  return (
    <div className="main-div">
      <Sidebar />
      <div className="create-listing-mainPage">
        <div>
          <h2>choose listing type</h2>
          <div className="choose-list-type">
            <ChooseAList />
            <ChooseSecondListing />
          </div>
        </div>
      </div>
    </div>
  );
}
