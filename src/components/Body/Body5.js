import React from "react";
import "./BodySection.css";
import Rating from "./Rating";

const Body5 = () => {
  const image =
    "https://razor.com/wp-content/themes/razor/assets/images/star-100.svg";
  return (
    <div className="body5-container">
      <h2 className="body5-text">
        <em>feeling the love</em>
        <img
          src="https://razor.com/wp-content/uploads/2020/07/testimonials-icon.png"
          className="after-text-img"
        />
      </h2>
      <div className="stars-list">
        <Rating img={image} />
        <Rating img={image} />
        <Rating img={image} />
        <Rating img={image} />
        <Rating img={image} />
      </div>
      <div className="stars-list-2">
        <Rating img={image} />
        <Rating img={image} />
        <Rating img={image} />
        <Rating img={image} />
        <Rating img={image} />
      </div>

      <div className="testimony">
        <ul className="test">
          <li className="each-testimony">
            <strong className="first-t">LASTS FOR 4000 MILES</strong>
            <p className="paraph">
              My original Razor scooter I've had since 2009 has reached around
              4000 MILES! I have ridden that thing almost everyday for the past
              11 years and I haven't had to replace anything on it which shows
              how well made they are.
            </p>
            <h7>THOMAS JOHNSON</h7>
          </li>

          <li className="each-testimony">
            <strong>LASTS YOU A LIFE TIME</strong>
            <p className="paraph">
              I have always had a scooter in my home growing up. Glad to get one
              for my child today!
            </p>
            <h7>NATHAN REICH</h7>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Body5;
