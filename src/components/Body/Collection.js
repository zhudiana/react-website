import React from "react";
import "./BodySection.css";

const Collection = (props) => {
  return (
    <div>
      <ul className="collection">
        <li className="each-collection">
          {" "}
          <img src={props.img} />
        </li>
        <li className="each-collection">
          {" "}
          <img src={props.img} />
        </li>
        <li className="each-collection">
          {" "}
          <img src={props.img} />
        </li>
        <li className="each-collection">
          {" "}
          <img src={props.img} />
        </li>
      </ul>
      <ul className="collection">
        <li className="each-collection">
          {" "}
          <img src={props.img} />
        </li>
        <li className="each-collection">
          {" "}
          <img src={props.img} />
        </li>
        <li className="each-collection">
          {" "}
          <img src={props.img} />
        </li>
        <li className="each-collection">
          {" "}
          <img src={props.img} />
        </li>
      </ul>
    </div>
  );
};

export default Collection;
