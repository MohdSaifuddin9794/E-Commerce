import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftFooter from './LeftFooter';
import MiddleFooter from './MiddleFooter';
import Right from './Right';
import { Link } from 'react-router-dom';
import './FooterCSS/footer.css';

const Footer = () => {
    return (
      <>
        <footer className="footer py-4 ">
          <Container>
            <Row>
              <Col xl="3" xs="12">
                <LeftFooter></LeftFooter>
              </Col>
              <Col xl="6" xs="12">
                <MiddleFooter />
              </Col>
              <Col xl="3" xs="12">
                <Right></Right>
              </Col>
            </Row>
          </Container>
        </footer>
        <div className="bottom-footer ">
          <Container className="pt-3 pb-3">
            <div className="d-flex align-items-center justify-content-between">
              <div className="left">
                <p>
                  © 2024,
                  <strong className="brand">Nest</strong> - HTML Ecommerce
                  Template <br />
                  All rights reserved
                </p>
              </div>
              <div className="mid">
                <div className="d-flex align-items-center justify-content-center gap-5">
                  <div className="d-flex align-items-center gap-1 hot-line ">
                    <img src="/assets/images/phone-call.svg" alt="hotline" />
                    <div className="">
                      <h1 className="num">1900 - 888</h1>
                      <p>24/7 Support Center</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-1 hot-line ">
                    <img src="/assets/images/phone-call.svg" alt="hotline" />
                    <div className="">
                      <h1 className="num">1900 - 888</h1>
                      <p>24/7 Support Center</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="d-flex align-items-center justify-content-end mb-1 gap-3">
                  <h6>Follow Us</h6>
                  <div className="d-flex align-items-center gap-2">
                    <Link>
                      <img
                        src="/assets/images/icon-facebook-white.svg"
                        alt=""
                      />
                    </Link>
                    <Link>
                      <img src="/assets/images/icon-twitter-white.svg" alt="" />
                    </Link>
                    <Link>
                      <img
                        src="/assets/images/icon-instagram-white.svg"
                        alt=""
                      />
                    </Link>
                    <Link>
                      <img
                        src="/assets/images/icon-pinterest-white.svg"
                        alt=""
                      />
                    </Link>
                    <Link>
                      <img src="/assets/images/icon-youtube-white.svg" alt="" />
                    </Link>
                  </div>
                </div>
                <p className="text-end my-0">
                  Up to 15% discount on your first subscribe
                </p>
              </div>
            </div>
          </Container>
        </div>
      </>
    );
}

export default Footer;
 