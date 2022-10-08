import React from "react";
import "./BodySection.css";
import Collection from "./Collection";

const Body3 = () => {
  return (
    <div className="body3-container">
      <h1 className="body3-title">
        <img
          src="https://razor.com/wp-content/uploads/2020/07/by-collection-icon.png"
          className="cartImg"
        />{" "}
        BY COLLECTION
      </h1>

      <div className="collections-list">
        <Collection
          img="https://razor.com/wp-content/uploads/2021/06/C25_GY_Product-375x600.png"
          name="Kick Scooters"
        />
        <Collection
          img="https://razor.com/wp-content/uploads/2021/06/C25_GY_Product-375x600.png"
          name="Kick Scooters"
        />
        <Collection
          img="https://razor.com/wp-content/uploads/2021/06/C25_GY_Product-375x600.png"
          name="Kick Scooters"
        />
        <Collection
          img="https://razor.com/wp-content/uploads/2021/06/C25_GY_Product-375x600.png"
          name="Kick Scooters"
        />
      </div>
    </div>
  );
};

export default Body3;
