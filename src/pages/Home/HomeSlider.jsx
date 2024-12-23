import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Import Navigation styles
import "swiper/css/pagination"; // Import Pagination styles

import { Button, Col, Row } from "react-bootstrap";
import bgone from "./../../assets/images/slider-1.png";
import bgTwo from "./../../assets/images/slider-2.png";
import { FiSend } from "react-icons/fi";
import "./SlideShow/slider.css";

// Import Swiper modules correctly for Swiper v8 and above
import { Navigation, Pagination } from "swiper/modules"; 

const HomeSlider = () => {
  const sliderContent = [
    {
      bgImg: bgone,
      title: `Don’t miss amazing grocery deals`,
      saveDeal: "Sign up for the daily newsletter",
    },
    {
      bgImg: bgTwo,
      title: "Fresh Vegetables Big discount",
      saveDeal: "Save up to 50% off on your first order",
    },
  ];

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation={{ clickable: true }} // Enables navigation buttons (previous/next)
      pagination={{ clickable: true }} // Adds pagination (bullets)
      loop // Optional: Makes the slider loop infinitely
      modules={[Navigation, Pagination]} // Correctly pass modules as an array
      className="home-slide"
    >
      {sliderContent.length > 0 ? (
        sliderContent.map((item, i) => (
          <SwiperSlide
            key={i}
            style={{ backgroundImage: `url(${item.bgImg})` }}
            className="my-3 slider-home"
          >
            <Row>
              <Col xl={6} xs={12}>
                <div className="content py50 pe-3">
                  <h1>{item.title}</h1>
                  <p>{item.saveDeal}</p>
                </div>
              </Col>
            </Row>
          </SwiperSlide>
        ))
      ) : (
        <p className="notFound">Data Not Found</p>
      )}
                  <div className="d-flex align-items-center gap-2 slider-box">
                    <FiSend />{" "}
                    <input
                      type="text"
                      placeholder="Your email address"
                      className="form-control border-0"
                    />
                    <Button className="Subscribe">Subscribe</Button>
                  </div>
    </Swiper>
  );
};

export default HomeSlider;
