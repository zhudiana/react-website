import React from "react";
import "./BodySection.css";

const Collection = (props) => {
  return (
    <div>
      <ul className="collection">
        <li className="each-collection">
          {" "}
          <img src={props.img} className="img-collection" />
          <h4 className="under-text">{props.name}</h4>
        </li>
        <li className="each-collection">
          {" "}
          <img src={props.img} className="img-collection" />
          <h4 className="under-text">{props.name}</h4>
        </li>
      </ul>
    </div>
  );
};

export default Collection;
