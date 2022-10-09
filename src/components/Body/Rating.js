import React from "react";
import "./BodySection.css";

const Rating = (props) => {
  return (
    <div className="rating">
      <ul className="stars">
        <li className="each-stars">
          <img className="star" src={props.img} />
        </li>
      </ul>
    </div>
  );
};

export default Rating;
