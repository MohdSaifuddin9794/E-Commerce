import React, { useState } from 'react';
import "./../shop.css";
import { Link} from 'react-router-dom';
import Form from "react-bootstrap/Form";
import { Box, Slider, Typography } from '@mui/material';
import { Button } from 'react-bootstrap';
import { CiFilter } from 'react-icons/ci';
import { IoIosStar } from 'react-icons/io';
const LeftFilters = () => {
    const MAX = 100;
    const MIN = 0;
    const marks = [
      {
        value: MIN,
        label: "",
      },
      {
        value: MAX,
        label: "",
      },
    ];
 const [val, setVal] = useState(MIN);
 const handleChange = (_, newValue) => {
   setVal(newValue);
  //  console.log(newValue)
 };
    return (
      <>
        <div className="widget-2">
          <h5 className="section-title style-1 mb-30">Category</h5>
          <ul>
            <li>
              <Link to="#">
                <img src="/assets/images/category-1.svg" alt="" />
                Milks & Dairies
              </Link>
              <span className="count">1</span>
            </li>
            <li>
              <Link to="#">
                <img src="/assets/images/category-2.svg" alt="" />
                Clothing
              </Link>
              <span className="count">1</span>
            </li>
            <li>
              <Link to="#">
                <img src="/assets/images/category-2.svg" alt="" />
                Pet Foods
              </Link>
              <span className="count">1</span>
            </li>
            <li>
              <Link to="#">
                <img src="/assets/images/category-2.svg" alt="" />
                Baking material
              </Link>
              <span className="count">1</span>
            </li>
            <li>
              <Link to="#">
                <img src="/assets/images/category-2.svg" alt="" />
                Fresh Fruit
              </Link>
              <span className="count">1</span>
            </li>
          </ul>
        </div>
        <div className="widget-2 price_range">
          <h5 className="section-title style-1 mb-30">Fill by price</h5>
          <Slider
            marks={marks}
            step={10}
            value={val}
            valueLabelDisplay="auto"
            min={MIN}
            max={MAX}
            onChange={handleChange}
          />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="body2"
              onClick={() => setVal(MIN)}
              sx={{ cursor: "pointer" }}
            >
              <span>Form : </span> {MIN} min
            </Typography>
            <Typography
              variant="body2"
              onClick={() => setVal(MAX)}
              sx={{ cursor: "pointer" }}
            >
              <span>To : </span>
              {val} max
            </Typography>
          </Box>
          <div className="list-check mt-3 mb-3">
            <label htmlFor="">Color</label>
            <Form>
              {["checkbox"].map((type) => (
                <div key={`inline-${type}`} className="mb-3 d-flex flex-column">
                  <Form.Check
                    inline
                    label="Red (56)"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="Green (78)"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    inline
                    label="Blue (54)"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}
            </Form>
          </div>
          <div className="list-check">
            <label htmlFor="">Item Condition</label>
            <Form>
              {["checkbox"].map((type) => (
                <div key={`inline-${type}`} className="mb-3 d-flex flex-column">
                  <Form.Check
                    inline
                    label="New (1506)"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="Refurbished (27)"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    inline
                    label="Used (45)"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}
              <Button className="filter-btn btn d-flex align-item-center justify-content-center gap-2">
                <CiFilter /> Filter
              </Button>
            </Form>
          </div>
        </div>
        <div className="widget-2">
          <h5 className="section-title style-1 mb-30">New products</h5>
          <div className="topSellingBox">
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

                  <div className="price-container d-flex align-items-center justify-content-between mt-1">
                    <div className="price">
                      <span className="dis">$32.8</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <div className="rating d-flex align-items-center">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
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

                  <div className="price-container d-flex align-items-center justify-content-between mt-1">
                    <div className="price">
                      <span className="dis">$32.8</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <div className="rating d-flex align-items-center">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
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

                  <div className="price-container d-flex align-items-center justify-content-between mt-1">
                    <div className="price">
                      <span className="dis">$32.8</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <div className="rating d-flex align-items-center">
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                      <IoIosStar />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="widget-2 organic">
          <div className="banner-text px-5">
            <span>Oragic</span>
            <h3 className="banner-title">
              Save 17% on <span>Oganic</span> Juice
            </h3>
          </div>
        </div>
      </>
    );
}

export default LeftFilters;
