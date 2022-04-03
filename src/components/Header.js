import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";
import Accordion from "react-bootstrap/Accordion";
import "./Header.css";
import "swiper/css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  const [active, setActive] = useState(false);

  function showMenu() {
    setActive(!active);
  }

  const list = [
    {
      title: "DAILY",
      description1: "summer socks",
      description2: "winter socks",
    },
    {
      title: "SPORTS",
      description1: "hockey socks",
      description2: "tennis socks",
    },
  ];

  return (
    <div>
      <div className="header">
        <div className="menu-icon">
          <GiHamburgerMenu className="menu" onClick={showMenu} />
        </div>
      </div>

      <div className={active ? "imageSwiper active" : "imageSwiper"}>
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div class="swiperContainer">
              <img src="./recovery.webp" width="200" height="250" />
              <div class="swiperText">
                <p>Recovery</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="swiperContainer">
              <img src="./cycling.webp" width="200" height="250" />
              <div class="swiperText">
                <p>Cycling</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="swiperContainer">
              <img src="./tennis.webp" width="200" height="250" />
              <div class="swiperText">
                <p>Tennis</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="swiperContainer">
              <img src="./rowing.webp" width="200" height="250" />
              <div class="swiperText">
                <p>Rowing</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <nav className={active ? "slider active" : "slider"}>
        <div className="closed">
          <GrClose className="close" onClick={showMenu} />
        </div>
        <div>
          <Accordion defaultActiveKey={["0"]} alwaysOpen>
            {list.map((element, index) => {
              return (
                <Accordion.Item eventKey={index}>
                  <Accordion.Header>{element.title}</Accordion.Header>

                  <Accordion.Body>{element.description1}</Accordion.Body>
                  <Accordion.Body>{element.description2}</Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </div>
      </nav>
    </div>
  );
}
