import React from 'react';
import "./FooterCSS/footer.css";
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const MiddleFooter = () => {
    return (
      <div className="middleFooter">
        <Row>
          <Col xl="3">
            <h4 className="widget-title">Company</h4>
            <ul className="footeList">
              <li>
                <Link to="#">About Us</Link>
              </li>
              <li>
                <Link to="#">Delivery Information</Link>
              </li>
              <li>
                <Link to="#">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="#">Contact Us</Link>
              </li>
              <li>
                <Link to="#">Support Center</Link>
              </li>
              <li>
                <Link to="#">Careers</Link>
              </li>
            </ul>
          </Col>
          <Col xl="3">
            <h4 className="widget-title">Account</h4>
            <ul className="footeList">
              <li>
                <Link to="#">About Us</Link>
              </li>
              <li>
                <Link to="#">Delivery Information</Link>
              </li>
              <li>
                <Link to="#">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="#">Contact Us</Link>
              </li>
              <li>
                <Link to="#">Support Center</Link>
              </li>
              <li>
                <Link to="#">Careers</Link>
              </li>
            </ul>
          </Col>
          <Col xl="3">
            <h4 className="widget-title">Corporate</h4>
            <ul className="footeList">
              <li>
                <Link to="#">About Us</Link>
              </li>
              <li>
                <Link to="#">Delivery Information</Link>
              </li>
              <li>
                <Link to="#">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="#">Contact Us</Link>
              </li>
              <li>
                <Link to="#">Support Center</Link>
              </li>
              <li>
                <Link to="#">Careers</Link>
              </li>
            </ul>
          </Col>
          <Col xl="3">
            <h4 className="widget-title">Popular</h4>
            <ul className="footeList">
              <li>
                <Link to="#">About Us</Link>
              </li>
              <li>
                <Link to="#">Delivery Information</Link>
              </li>
              <li>
                <Link to="#">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="#">Contact Us</Link>
              </li>
              <li>
                <Link to="#">Support Center</Link>
              </li>
              <li>
                <Link to="#">Careers</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    );
}

export default MiddleFooter;
