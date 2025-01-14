import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Import Navigation styles
import { Navigation } from "swiper/modules"; 
import { Col, ProgressBar, Row } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import product from './../../../assets/images/product-9-2.jpg'
import { IoIosStar, IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline, IoEyeOutline } from "react-icons/io5";
import { GiInterleavedArrows } from "react-icons/gi"; 

const BestDeal = (props) => {
  
  return (
    <div className="best-deals">
      <Row>
        <Col xl={3} md={6} xs={12}>
          <div className="deal-banner">
            <h3>Bring nature into your home</h3>
            <button className="btn btn-deals">
              <span>Shop Now</span> <FaArrowRight />
            </button>
          </div>
        </Col>
        <Col xl={9} md={6} xs={12}>
          <Swiper
            spaceBetween={20}
            slidesPerView={4}
            navigation={{ clickable: true }} // Enables navigation buttons (previous/next)
            pagination={{ clickable: false }} // Adds pagination (bullets)
            loop // Optional: Makes the slider loop infinitely
            modules={[Navigation]} // Correctly pass modules as an array
            className="cat-slide"
          >
            <SwiperSlide className="my-3 category-slides">
              <div className="product-card p-3">
                {props.tag !== null ? (
                  <span
                    className={`badge p-2 d-block ${
                      props.tag === props.tag ? props.tag : ""
                    }`}
                  >
                    {props.tag}
                  </span>
                ) : null}
                <div className="d-flex align-items-center justify-content-center">
                  <div className="img-container">
                    <img src={product} alt="" />
                    <div className="overlay">
                      <div className="d-flex align-items-ceter justify-content-center">
                        <IoMdHeartEmpty />
                        <GiInterleavedArrows />
                        <IoEyeOutline />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <span className="product-category">Snack</span>
                  <h4 className="product-title text-start">
                    Seeds of Change Organic Quinoa, Brown, & Red Rice
                  </h4>
                  <div className="d-flex align-items-center gap-3">
                    <div className="rating d-flex align-items-center">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                    </div>
                    <span className="rates">(5.0)</span>
                  </div>
                  <div className="price-container d-flex align-items-center justify-content-between">
                    <div className="price">
                      <span className="bold">$28.85 </span>{" "}
                      <span className="dis">$32.8</span>
                    </div>
                  </div>
                  <div>
                    <ProgressBar now={60} />
                    <span className="sold-items"> Sold: 90/120</span>
                  </div>
                  <div>
                    <button className="btn btn-primary all-cat-btn d-flex align-items-center gap-2 justify-content-center w-100 mt-3 mb-0">
                      <IoCartOutline />
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="my-3 category-slides">
              <div className="product-card p-3">
                {props.tag !== null ? (
                  <span
                    className={`badge p-2 d-block ${
                      props.tag === props.tag ? props.tag : ""
                    }`}
                  >
                    {props.tag}
                  </span>
                ) : null}
                <div className="d-flex align-items-center justify-content-center">
                  <div className="img-container">
                    <img src={product} alt="" />
                    <div className="overlay">
                      <div className="d-flex align-items-ceter justify-content-center">
                        <IoMdHeartEmpty />
                        <GiInterleavedArrows />
                        <IoEyeOutline />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <span className="product-category">Snack</span>
                  <h4 className="product-title text-start">
                    Seeds of Change Organic Quinoa, Brown, & Red Rice
                  </h4>
                  <div className="d-flex align-items-center gap-3">
                    <div className="rating d-flex align-items-center">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                    </div>
                    <span className="rates">(5.0)</span>
                  </div>
                  <div className="price-container d-flex align-items-center justify-content-between">
                    <div className="price">
                      <span className="bold">$28.85 </span>{" "}
                      <span className="dis">$32.8</span>
                    </div>
                  </div>
                  <div>
                    <ProgressBar now={60} />
                    <span className="sold-items"> Sold: 90/120</span>
                  </div>
                  <div>
                    <button className="btn btn-primary all-cat-btn d-flex align-items-center gap-2 justify-content-center w-100 mt-3 mb-0">
                      <IoCartOutline />
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="my-3 category-slides">
              <div className="product-card p-3">
                {props.tag !== null ? (
                  <span
                    className={`badge p-2 d-block ${
                      props.tag === props.tag ? props.tag : ""
                    }`}
                  >
                    {props.tag}
                  </span>
                ) : null}
                <div className="d-flex align-items-center justify-content-center">
                  <div className="img-container">
                    <img src={product} alt="" />
                    <div className="overlay">
                      <div className="d-flex align-items-ceter justify-content-center">
                        <IoMdHeartEmpty />
                        <GiInterleavedArrows />
                        <IoEyeOutline />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <span className="product-category">Snack</span>
                  <h4 className="product-title text-start">
                    Seeds of Change Organic Quinoa, Brown, & Red Rice
                  </h4>
                  <div className="d-flex align-items-center gap-3">
                    <div className="rating d-flex align-items-center">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                    </div>
                    <span className="rates">(5.0)</span>
                  </div>
                  <div className="price-container d-flex align-items-center justify-content-between">
                    <div className="price">
                      <span className="bold">$28.85 </span>{" "}
                      <span className="dis">$32.8</span>
                    </div>
                  </div>
                  <div>
                    <ProgressBar now={60} />
                    <span className="sold-items"> Sold: 90/120</span>
                  </div>
                  <div>
                    <button className="btn btn-primary all-cat-btn d-flex align-items-center gap-2 justify-content-center w-100 mt-3 mb-0">
                      <IoCartOutline />
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="my-3 category-slides">
              <div className="product-card p-3">
                {props.tag !== null ? (
                  <span
                    className={`badge p-2 d-block ${
                      props.tag === props.tag ? props.tag : ""
                    }`}
                  >
                    {props.tag}
                  </span>
                ) : null}
                <div className="d-flex align-items-center justify-content-center">
                  <div className="img-container">
                    <img src={product} alt="" />
                    <div className="overlay">
                      <div className="d-flex align-items-ceter justify-content-center">
                        <IoMdHeartEmpty />
                        <GiInterleavedArrows />
                        <IoEyeOutline />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <span className="product-category">Snack</span>
                  <h4 className="product-title text-start">
                    Seeds of Change Organic Quinoa, Brown, & Red Rice
                  </h4>
                  <div className="d-flex align-items-center gap-3">
                    <div className="rating d-flex align-items-center">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                    </div>
                    <span className="rates">(5.0)</span>
                  </div>
                  <div className="price-container d-flex align-items-center justify-content-between">
                    <div className="price">
                      <span className="bold">$28.85 </span>{" "}
                      <span className="dis">$32.8</span>
                    </div>
                  </div>
                  <div>
                    <ProgressBar now={60} />
                    <span className="sold-items"> Sold: 90/120</span>
                  </div>
                  <div>
                    <button className="btn btn-primary all-cat-btn d-flex align-items-center gap-2 justify-content-center w-100 mt-3 mb-0">
                      <IoCartOutline />
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="my-3 category-slides">
              <div className="product-card p-3">
                {props.tag !== null ? (
                  <span
                    className={`badge p-2 d-block ${
                      props.tag === props.tag ? props.tag : ""
                    }`}
                  >
                    {props.tag}
                  </span>
                ) : null}
                <div className="d-flex align-items-center justify-content-center">
                  <div className="img-container">
                    <img src={product} alt="" />
                    <div className="overlay">
                      <div className="d-flex align-items-ceter justify-content-center">
                        <IoMdHeartEmpty />
                        <GiInterleavedArrows />
                        <IoEyeOutline />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <span className="product-category">Snack</span>
                  <h4 className="product-title text-start">
                    Seeds of Change Organic Quinoa, Brown, & Red Rice
                  </h4>
                  <div className="d-flex align-items-center gap-3">
                    <div className="rating d-flex align-items-center">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                    </div>
                    <span className="rates">(5.0)</span>
                  </div>
                  <div className="price-container d-flex align-items-center justify-content-between">
                    <div className="price">
                      <span className="bold">$28.85 </span>{" "}
                      <span className="dis">$32.8</span>
                    </div>
                  </div>
                  <div>
                    <ProgressBar now={60} />
                    <span className="sold-items"> Sold: 90/120</span>
                  </div>
                  <div>
                    <button className="btn btn-primary all-cat-btn d-flex align-items-center gap-2 justify-content-center w-100 mt-3 mb-0">
                      <IoCartOutline />
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="my-3 category-slides">
              <div className="product-card p-3">
                {props.tag !== null ? (
                  <span
                    className={`badge p-2 d-block ${
                      props.tag === props.tag ? props.tag : ""
                    }`}
                  >
                    {props.tag}
                  </span>
                ) : null}
                <div className="d-flex align-items-center justify-content-center">
                  <div className="img-container">
                    <img src={product} alt="" />
                    <div className="overlay">
                      <div className="d-flex align-items-ceter justify-content-center">
                        <IoMdHeartEmpty />
                        <GiInterleavedArrows />
                        <IoEyeOutline />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <span className="product-category">Snack</span>
                  <h4 className="product-title text-start">
                    Seeds of Change Organic Quinoa, Brown, & Red Rice
                  </h4>
                  <div className="d-flex align-items-center gap-3">
                    <div className="rating d-flex align-items-center">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                    </div>
                    <span className="rates">(5.0)</span>
                  </div>
                  <div className="price-container d-flex align-items-center justify-content-between">
                    <div className="price">
                      <span className="bold">$28.85 </span>{" "}
                      <span className="dis">$32.8</span>
                    </div>
                  </div>
                  <div>
                    <ProgressBar now={60} />
                    <span className="sold-items"> Sold: 90/120</span>
                  </div>
                  <div>
                    <button className="btn btn-primary all-cat-btn d-flex align-items-center gap-2 justify-content-center w-100 mt-3 mb-0">
                      <IoCartOutline />
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="my-3 category-slides">
              <div className="product-card p-3">
                {props.tag !== null ? (
                  <span
                    className={`badge p-2 d-block ${
                      props.tag === props.tag ? props.tag : ""
                    }`}
                  >
                    {props.tag}
                  </span>
                ) : null}
                <div className="d-flex align-items-center justify-content-center">
                  <div className="img-container">
                    <img src={product} alt="" />
                    <div className="overlay">
                      <div className="d-flex align-items-ceter justify-content-center">
                        <IoMdHeartEmpty />
                        <GiInterleavedArrows />
                        <IoEyeOutline />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <span className="product-category">Snack</span>
                  <h4 className="product-title text-start">
                    Seeds of Change Organic Quinoa, Brown, & Red Rice
                  </h4>
                  <div className="d-flex align-items-center gap-3">
                    <div className="rating d-flex align-items-center">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                    </div>
                    <span className="rates">(5.0)</span>
                  </div>
                  <div className="price-container d-flex align-items-center justify-content-between">
                    <div className="price">
                      <span className="bold">$28.85 </span>{" "}
                      <span className="dis">$32.8</span>
                    </div>
                  </div>
                  <div>
                    <ProgressBar now={60} />
                    <span className="sold-items"> Sold: 90/120</span>
                  </div>
                  <div>
                    <button className="btn btn-primary all-cat-btn d-flex align-items-center gap-2 justify-content-center w-100 mt-3 mb-0">
                      <IoCartOutline />
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="my-3 category-slides">
              <div className="product-card p-3">
                {props.tag !== null ? (
                  <span
                    className={`badge p-2 d-block ${
                      props.tag === props.tag ? props.tag : ""
                    }`}
                  >
                    {props.tag}
                  </span>
                ) : null}
                <div className="d-flex align-items-center justify-content-center">
                  <div className="img-container">
                    <img src={product} alt="" />
                    <div className="overlay">
                      <div className="d-flex align-items-ceter justify-content-center">
                        <IoMdHeartEmpty />
                        <GiInterleavedArrows />
                        <IoEyeOutline />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <span className="product-category">Snack</span>
                  <h4 className="product-title text-start">
                    Seeds of Change Organic Quinoa, Brown, & Red Rice
                  </h4>
                  <div className="d-flex align-items-center gap-3">
                    <div className="rating d-flex align-items-center">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                    </div>
                    <span className="rates">(5.0)</span>
                  </div>
                  <div className="price-container d-flex align-items-center justify-content-between">
                    <div className="price">
                      <span className="bold">$28.85 </span>{" "}
                      <span className="dis">$32.8</span>
                    </div>
                  </div>
                  <div>
                    <ProgressBar now={60} />
                    <span className="sold-items"> Sold: 90/120</span>
                  </div>
                  <div>
                    <button className="btn btn-primary all-cat-btn d-flex align-items-center gap-2 justify-content-center w-100 mt-3 mb-0">
                      <IoCartOutline />
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="my-3 category-slides">
              <div className="product-card p-3">
                {props.tag !== null ? (
                  <span
                    className={`badge p-2 d-block ${
                      props.tag === props.tag ? props.tag : ""
                    }`}
                  >
                    {props.tag}
                  </span>
                ) : null}
                <div className="d-flex align-items-center justify-content-center">
                  <div className="img-container">
                    <img src={product} alt="" />
                    <div className="overlay">
                      <div className="d-flex align-items-ceter justify-content-center">
                        <IoMdHeartEmpty />
                        <GiInterleavedArrows />
                        <IoEyeOutline />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <span className="product-category">Snack</span>
                  <h4 className="product-title text-start">
                    Seeds of Change Organic Quinoa, Brown, & Red Rice
                  </h4>
                  <div className="d-flex align-items-center gap-3">
                    <div className="rating d-flex align-items-center">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                    </div>
                    <span className="rates">(5.0)</span>
                  </div>
                  <div className="price-container d-flex align-items-center justify-content-between">
                    <div className="price">
                      <span className="bold">$28.85 </span>{" "}
                      <span className="dis">$32.8</span>
                    </div>
                  </div>
                  <div>
                    <ProgressBar now={60} />
                    <span className="sold-items"> Sold: 90/120</span>
                  </div>
                  <div>
                    <button className="btn btn-primary all-cat-btn d-flex align-items-center gap-2 justify-content-center w-100 mt-3 mb-0">
                      <IoCartOutline />
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </Col>
      </Row>
    </div>
  );
};

export default BestDeal;
