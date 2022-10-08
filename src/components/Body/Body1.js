import React from "react";
import "../../App.css";
import { Button } from "../Button";
import "./BodySection.css";

const Body1 = () => {
  return (
    <div className="body1-container">
      <img
        src="https://razor.com/wp-content/uploads/2022/09/EcoSmart_Cargo_Product_0155-scaled.jpg"
        alt="bg"
        className="nav-bg"
      />
      <h1 className="over-text">ecosmart cargo</h1>
      <div className="view-product-btn">
        <Button
          className="btns"
          buttonSize="btn--under"
          buttonStyle="btn--medium"
        >
          View Products
        </Button>
      </div>
    </div>
  );
};

export default Body1;
