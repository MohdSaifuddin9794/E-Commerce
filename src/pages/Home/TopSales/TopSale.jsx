import React from 'react';
import { IoIosStar } from 'react-icons/io';
import { Link } from 'react-router-dom';

const TopSale = (props) => {
    return (
      <div className="topSellingBox">
        <h3 className="topSelling-title">{props.title}</h3>
        <div className="topSelling-list">
          <div className="items d-flex align-items-center gap-3 mb-3">
            <div className="list-item-img-container">
              <Link to={"/"}>
                <img src="/assets/images/thumbnail-1.jpg" alt="" />
              </Link>
            </div>
            <div className="items-info">
              <Link to={"/"}>
                <h3>Nestle Original Coffee-Mate Coffee Creamer</h3>
              </Link>
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
              <div className="price-container d-flex align-items-center justify-content-between mt-3">
                <div className="price">
                  <span className="bold">$28.85 </span>{" "}
                  <span className="dis">$32.8</span>
                </div>
              </div>
            </div>
          </div>
          <div className="items d-flex align-items-center gap-3 mb-3">
            <div className="list-item-img-container">
              <Link to={"/"}>
                <img src="/assets/images/thumbnail-1.jpg" alt="" />
              </Link>
            </div>
            <div className="items-info">
              <Link to={"/"}>
                <h3>Nestle Original Coffee-Mate Coffee Creamer</h3>
              </Link>
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
              <div className="price-container d-flex align-items-center justify-content-between mt-3">
                <div className="price">
                  <span className="bold">$28.85 </span>{" "}
                  <span className="dis">$32.8</span>
                </div>
              </div>
            </div>
          </div>
          <div className="items d-flex align-items-center gap-3 mb-3">
            <div className="list-item-img-container">
              <Link to={"/"}>
                <img src="/assets/images/thumbnail-1.jpg" alt="" />
              </Link>
            </div>
            <div className="items-info">
              <Link to={"/"}>
                <h3>Nestle Original Coffee-Mate Coffee Creamer</h3>
              </Link>
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
              <div className="price-container d-flex align-items-center justify-content-between mt-3">
                <div className="price">
                  <span className="bold">$28.85 </span>{" "}
                  <span className="dis">$32.8</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    );
}

export default TopSale;
