import React from "react";
import "./BodySection.css";

const CarouselContent = (props) => {
  return (
    <div>
      <div className="content1">
        <div className="img">
          <img src={props.img} />
        </div>
        <div className="descrptn">
          <div className="name">
            <h2>{props.name} </h2>
          </div>
          <div className="color">
            <h2>{props.color} </h2>
          </div>
          <div className="detail">
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselContent;
