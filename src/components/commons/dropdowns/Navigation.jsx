import React, { useEffect, useRef } from "react";
import { Button, Col, Container, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle, NavDropdown, NavLink, Row } from "react-bootstrap";
import { IoChevronDown, IoGridOutline } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";
import MegaMenu from "./MegaMenu";

const Navigation = () => {

  return (
    <div className="nav py-3" >
      <Container>
        <Row className=" align-items-center">
          <Col sm={2}>
            <Button className="btn btn-primary all-cat-btn">
              <IoGridOutline /> Browse All Categories <IoChevronDown />
            </Button>
          </Col>
          <Col sm={8} className=" align-items-center">
            <ul className="nav-list d-flex align-items-center gap-5 justify-content-center">
              <li className="list-item">
                <Button>
                  <Link to="/">Home</Link>
                </Button>
              </li>
              <li className="list-item">
                <Button>
                  <Link to="/about">About</Link>
                </Button>
              </li>
              <li className="list-item">
                <Button>
                  <Link to="/shop">Shop</Link>
                </Button>
              </li>
              <li className="list-item">
                <Button>
                  <Link>Vendors</Link>
                </Button>
              </li>
              <li className="list-item">
                <Button>
                  <Link>
                    Mega Menu <IoChevronDown />
                  </Link>
                </Button>
                <MegaMenu></MegaMenu>
              </li>
              <li className="list-item">
                <Button>
                  <Link>Blog</Link>
                </Button>
              </li>
              <li className="list-item">
                <Button>
                  <Link>
                    Pages <IoChevronDown />
                  </Link>
                </Button>

                <ul className=" sub-menu slide-animation">
                  <li>
                    <Button>
                      <Link to="/about">About Us </Link>
                    </Button>
                  </li>
                  <li>
                    <Button>
                      <Link to="/contact">Contact </Link>
                    </Button>
                  </li>
                  <li>
                    <Button>
                      <Link to="/my-account">My Account</Link>
                    </Button>
                  </li>
                  <li>
                    <Button>
                      <Link to="/about">Login</Link>
                    </Button>
                  </li>
                  <li>
                    <Button>
                      <Link to="/about">Register </Link>
                    </Button>
                  </li>
                  <li>
                    <Button>
                      <Link to="/about">Forgot Password</Link>
                    </Button>
                  </li>
                  <li>
                    <Button>
                      <Link to="/about">Reset Password</Link>
                    </Button>
                  </li>
                  <li>
                    <Button>
                      <Link to="/about">Puchase Guide</Link>
                    </Button>
                  </li>
                  <li>
                    <Button>
                      <Link to="/about">Privacy Policy </Link>
                    </Button>
                  </li>
                  <li>
                    <Button>
                      <Link to="/about">Terms of Service</Link>
                    </Button>
                  </li>
                  <li>
                    <Button>
                      <Link to="/about">404 Page</Link>
                    </Button>
                  </li>
                </ul>
              </li>
              <li className="list-item">
                <Button>
                  <Link to="/contact">Contact</Link>
                </Button>
              </li>
            </ul>
          </Col>
          <Col sm={2}>
            <div className="d-flex align-items-center gap-1 hot-line ">
              <TfiHeadphoneAlt />
              <div className="">
                <h1 className="num">1900 - 888</h1>
                <p>24/7 Support Center</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Navigation;
