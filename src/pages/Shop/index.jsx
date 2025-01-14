import React from "react";
import { Breadcrumb, Col, Container, Row, Form} from "react-bootstrap";
import LeftFilters from "./CatLeft/LeftFilters";
import "./shop.css";
import Product from "../../components/commons/Product";

import { RxDashboard } from "react-icons/rx";
import { TbSortDescending2 } from "react-icons/tb";
import Newsletter from "../Home/NewsLetters/Newsletter";
const Shop = () => {
  return (
    <>
      <section className="shop">
        <Container>
          <div className="breadcrumb-container">
            <h2 className="title">Snacks</h2>
            <Breadcrumb>
              <Breadcrumb.Item active href="/home">
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item href="/shop">shop</Breadcrumb.Item>
              <Breadcrumb.Item>Snacks</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <Row>
            <Col xl={3} lg={3} md={12} xs={12}>
              <LeftFilters></LeftFilters>
            </Col>
            <Col xl={9} lg={9} md={9} xs={9}>
              <div className="d-flex aling-items-center justify-content-between flex-wrap mb-4">
                <p className="para mb-0">
                  We found <strong>29 </strong>items for you!
                </p>
                <div className="d-flex aling-items-center  gap-3">
                  <span className="d-flex align-items-center  location">
                    <RxDashboard />
                    <Form.Select>
                      <option>Disabled select</option>
                      <option>Disabled select</option>
                      <option>Disabled select</option>
                    </Form.Select>
                  </span>
                  <span className="d-flex align-items-center  location">
                    <TbSortDescending2 />
                    <Form.Select>
                      <option>Disabled select</option>
                      <option>Disabled select</option>
                      <option>Disabled select</option>
                    </Form.Select>
                  </span>
                </div>
              </div>
              <div className="d-flex aling-items-center justify-content-between flex-wrap">
                <Product tag={"Hot"}></Product>
                <Product tag={"Sale"}></Product>
                <Product tag={"New"}></Product>
                <Product></Product>
                <Product tag={"Off"}></Product>
                <Product></Product>
                <Product></Product>
                <Product tag={"Hot"}></Product>
                <Product tag={"Sale"}></Product>
                <Product></Product>
                <Product tag={"Hot"}></Product>
                <Product tag={"Sale"}></Product>
                <Product tag={"New"}></Product>
                <Product></Product>
                <Product></Product>
                <Product tag={"Off"}></Product>
                <Product></Product>
                <Product></Product>
                <Product tag={"Hot"}></Product>
                <Product tag={"Sale"}></Product>
              
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
            <Newsletter />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Shop;
