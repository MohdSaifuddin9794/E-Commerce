import React from 'react';
import product from "./../../assets/images/product-9-2.jpg";
import { IoIosStar, IoMdHeartEmpty } from 'react-icons/io';
import { IoCartOutline, IoEyeOutline } from 'react-icons/io5';
import { GiInterleavedArrows } from 'react-icons/gi';
const Product = () => {
    return (
      <div className="product-card p-3">
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
          <h4 className="product-title">
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
            <button className="btn btn-primary all-cat-btn d-flex align-items-center gap-2 justify-content-center">
              <IoCartOutline />
              Add
            </button>
          </div>
        </div>
      </div>
    );
}

export default Product;
