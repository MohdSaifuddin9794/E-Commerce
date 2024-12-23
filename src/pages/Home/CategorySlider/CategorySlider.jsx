import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Import Navigation styles
// import "swiper/css/pagination"; // Import Pagination styles
import { Col, Row } from "react-bootstrap";
// Import Swiper modules correctly for Swiper v8 and above
import { Navigation } from "swiper/modules"; 
import './catSlider.css'
const CategorySlider = () => {
  return (
    <div className="py-5">
      <Row>
        <Col xs={12}>
          <div className="d-flex align-items-center gap-3 mb-3">
            <h3 className="slider-heading">Featured Categories</h3>
          </div>
          <Swiper
            spaceBetween={20}
            slidesPerView={10}
            navigation={{ clickable: true }} // Enables navigation buttons (previous/next)
            pagination={{ clickable: false }} // Adds pagination (bullets)
            loop // Optional: Makes the slider loop infinitely
            modules={[Navigation]} // Correctly pass modules as an array
            className="cat-slide"
          >
            <SwiperSlide className="my-3 category-slides">
              <div className="p-3 text-center">
                <img
                  src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-3.png"
                  alt=""
                />
                <h4>Snack</h4>
                <p>10 items</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="my-3 category-slides">
              <div className="p-3 text-center">
                <img
                  src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-3.png"
                  alt=""
                />
                <h4>Snack</h4>
                <p>10 items</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="my-3 category-slides">
              <div className="p-3 text-center">
                <img
                  src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-3.png"
                  alt=""
                />
                <h4>Snack</h4>
                <p>10 items</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="my-3 category-slides">
              <div className="p-3 text-center">
                <img
                  src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-3.png"
                  alt=""
                />
                <h4>Snack</h4>
                <p>10 items</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="my-3 category-slides">
              <div className="p-3 text-center">
                <img
                  src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-3.png"
                  alt=""
                />
                <h4>Snack</h4>
                <p>10 items</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="my-3 category-slides">
              <div className="p-3 text-center">
                <img
                  src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-3.png"
                  alt=""
                />
                <h4>Snack</h4>
                <p>10 items</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="my-3 category-slides">
              <div className="p-3 text-center">
                <img
                  src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-3.png"
                  alt=""
                />
                <h4>Snack</h4>
                <p>10 items</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="my-3 category-slides">
              <div className="p-3 text-center">
                <img
                  src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-3.png"
                  alt=""
                />
                <h4>Snack</h4>
                <p>10 items</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="my-3 category-slides">
              <div className="p-3 text-center">
                <img
                  src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-3.png"
                  alt=""
                />
                <h4>Snack</h4>
                <p>10 items</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="my-3 category-slides">
              <div className="p-3 text-center">
                <img
                  src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-3.png"
                  alt=""
                />
                <h4>Snack</h4>
                <p>10 items</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="my-3 category-slides">
              <div className="p-3 text-center">
                <img
                  src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-3.png"
                  alt=""
                />
                <h4>Snack</h4>
                <p>10 items</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="my-3 category-slides">
              <div className="p-3 text-center">
                <img
                  src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-3.png"
                  alt=""
                />
                <h4>Snack</h4>
                <p>10 items</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="my-3 category-slides">
              <div className="p-3 text-center">
                <img
                  src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-3.png"
                  alt=""
                />
                <h4>Snack</h4>
                <p>10 items</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="my-3 category-slides">
              <div className="p-3 text-center">
                <img
                  src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/cat-3.png"
                  alt=""
                />
                <h4>Snack</h4>
                <p>10 items</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </Col>
        
      </Row>
    </div>
  );
};

export default CategorySlider;
