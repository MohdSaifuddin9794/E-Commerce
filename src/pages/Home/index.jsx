import React from 'react';
import HomeSlider from './HomeSlider';
import { Col, Container, Row } from 'react-bootstrap';
import CategorySlider from './CategorySlider/CategorySlider';
import { Link } from 'react-router-dom';
import  banner from "./../../assets/images/banner-1.png";
import bannerOne from "./../../assets/images/banner-2.png";
import bannerTwo from "./../../assets/images/banner-3.png";
import { FaArrowRight } from 'react-icons/fa';
import Product from '../../components/commons/Product';

const Home = () => {
    return (
      <div>
        <Container>
          <HomeSlider />
          <CategorySlider></CategorySlider>
          <section className="mt-3 mb-4">
            <Row>
              <Col xl={4}>
                <div className="img-container-content">
                  <img src={banner} alt="" />
                  <div className="content">
                    <h3 className="secondary-heading">
                      Everyday Fresh & Clean with Our Products
                    </h3>
                    <Link
                      to="/shop-now"
                      className="btn btn-primary all-cat-btn"
                    >
                      Show Now <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </Col>
              <Col xl={4}>
                <div className="img-container-content">
                  <img src={bannerOne} alt="" />
                  <div className="content">
                    <h3 className="secondary-heading">
                      Make your Breakfast Healthy and Easy
                    </h3>
                    <Link
                      to="/shop-now"
                      className="btn btn-primary all-cat-btn"
                    >
                      Show Now <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </Col>
              <Col xl={4}>
                <div className="img-container-content">
                  <img src={bannerTwo} alt="" />
                  <div className="content">
                    <h3 className="secondary-heading">
                      The best Organic Products Online
                    </h3>
                    <Link
                      to="/shop-now"
                      className="btn btn-primary all-cat-btn"
                    >
                      Show Now <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </section>
          <section className="py-3">
            <div className="d-flex align-items-center justify-content-between mb-3      ">
              <h3 className="secondary-heading">Popular Products</h3>
              <ul className="pl-0 d-flex align-items-center gap-3 product-cat">
                <li>
                  <Link to={"/"}>All</Link>
                </li>
                <li>
                  <Link to={"/"}>Milks & Dairies</Link>
                </li>
                <li>
                  <Link to={"/"}>Coffee & Teas</Link>
                </li>
                <li>
                  <Link to={"/"}>Pets Food</Link>
                </li>
                <li>
                  <Link to={"/"}>Meat</Link>
                </li>
                <li>
                  <Link to={"/"}>Vegetables</Link>
                </li>
                <li>
                  <Link to={"/"}>Fruits</Link>
                </li>
              </ul>
            </div>
            <div className="d-flex aling-items-center justify-content-between flex-wrap">
              <Product></Product>
              <Product></Product>
              <Product></Product>
              <Product></Product>
              <Product></Product>
              <Product></Product>
              <Product></Product>
              <Product></Product>
              <Product></Product>
              <Product></Product>
            </div>
          </section>
        </Container>
      </div>
    );
}

export default Home;
