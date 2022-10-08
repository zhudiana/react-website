import React from "react";
import { Carousel } from "react-bootstrap";
import CarouselContent from "./CarouselContent";

const Body2 = () => {
  return (
    <div className="body2-container">
      <h1 className="body2-title">
        What's{" "}
        <img src="https://razor.com/wp-content/uploads/2017/12/fire-icon-new.png" />{" "}
        at Razor
      </h1>
      <div className="carousel">
        <Carousel>
          <Carousel.Item>
            <ul className="items">
              <li className="item">
                <CarouselContent
                  img="https://razor.com/wp-content/uploads/2019/04/CrazyCart_Shift_BL_BK_Product-349x343.png"
                  name="CRAXY CART SHIFT"
                  color="BLUE/BLACK"
                  description="Ages 6+ (LOW setting) 8+(HIGH setting)"
                />
              </li>
              <li className="item">
                <CarouselContent
                  img="https://razor.com/wp-content/uploads/2022/02/Rambler12_White_Product-349x303.png"
                  name="CRAXY CART SHIFT"
                  color="BLUE/BLACK"
                  description="Ages 6+ (LOW setting) 8+(HIGH setting)"
                />
              </li>
              <li className="item">
                <CarouselContent
                  img="https://razor.com/wp-content/uploads/2022/02/Rambler12_White_Product-349x303.png"
                  name="CRAXY CART SHIFT"
                  color="BLUE/BLACK"
                  description="Ages 6+ (LOW setting) 8+(HIGH setting)"
                />
              </li>
            </ul>
          </Carousel.Item>

          <Carousel.Item>
            <ul className="items">
              <li className="item">
                <CarouselContent
                  img="https://razor.com/wp-content/uploads/2018/01/A_RD_Product-223x343.png"
                  name="CRAXY CART SHIFT"
                  color="BLUE/BLACK"
                  description="Ages 6+ (LOW setting) 8+(HIGH setting)"
                />
              </li>
              <li className="item">
                <CarouselContent
                  img="https://razor.com/wp-content/uploads/2021/07/A_Kick_BK_TAR_Product1-192x343.png"
                  name="CRAXY CART SHIFT"
                  color="BLUE/BLACK"
                  description="Ages 6+ (LOW setting) 8+(HIGH setting)"
                />
              </li>
              <li className="item">
                <CarouselContent
                  img="https://razor.com/wp-content/uploads/2018/02/A5Lux_RD_Product_1655x2000_180208-284x343.png"
                  name="CRAXY CART SHIFT"
                  color="BLUE/BLACK"
                  description="Ages 6+ (LOW setting) 8+(HIGH setting)"
                />
              </li>
            </ul>
          </Carousel.Item>
          <Carousel.Item>
            <ul className="items">
              <li className="item">
                <CarouselContent
                  img="https://razor.com/wp-content/uploads/2021/09/RipRider360_Lightshow_BK_Product-349x304.png"
                  name="CRAXY CART SHIFT"
                  color="BLUE/BLACK"
                  description="Ages 6+ (LOW setting) 8+(HIGH setting)"
                />
              </li>
              <li className="item">
                <CarouselContent
                  img="https://razor.com/wp-content/uploads/2020/07/BlackLabel_E90_GR_Product-1-210x343.png"
                  name="CRAXY CART SHIFT"
                  color="BLUE/BLACK"
                  description="Ages 6+ (LOW setting) 8+(HIGH setting)"
                />
              </li>
              <li className="item">
                <CarouselContent
                  img="https://razor.com/wp-content/uploads/2021/04/RipStik_Electric_Deux_Product-2-349x192.png"
                  name="CRAXY CART SHIFT"
                  color="BLUE/BLACK"
                  description="Ages 6+ (LOW setting) 8+(HIGH setting)"
                />
              </li>
            </ul>
          </Carousel.Item>
          <Carousel.Item>
            <ul className="items">
              <li className="item">
                <CarouselContent
                  img="https://razor.com/wp-content/uploads/2019/04/CrazyCart_Shift_BL_BK_Product-349x343.png"
                  name="CRAXY CART SHIFT"
                  color="BLUE/BLACK"
                  description="Ages 6+ (LOW setting) 8+(HIGH setting)"
                />
              </li>
              <li className="item">
                <CarouselContent
                  img="https://razor.com/wp-content/uploads/2022/02/Rambler12_White_Product-349x303.png"
                  name="CRAXY CART SHIFT"
                  color="BLUE/BLACK"
                  description="Ages 6+ (LOW setting) 8+(HIGH setting)"
                />
              </li>
              <li className="item">
                <CarouselContent
                  img="https://razor.com/wp-content/uploads/2022/02/Rambler12_White_Product-349x303.png"
                  name="CRAXY CART SHIFT"
                  color="BLUE/BLACK"
                  description="Ages 6+ (LOW setting) 8+(HIGH setting)"
                />
              </li>
            </ul>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Body2;
