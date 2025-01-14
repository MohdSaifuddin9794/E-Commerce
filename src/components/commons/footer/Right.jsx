import React from 'react';
import "./FooterCSS/footer.css";
import { Link } from 'react-router-dom';
const Right = () => {
    return (
      <div className="right-footer">
        <h4 className="widget-title">Install App</h4>
        <p className="store-para my-3">From App Store or Google Play</p>
        <div className="d-flex align-items-center gap-3 mb-4">
          <Link to="#" className="d-block">
            <img src="/assets/images/app-store.jpg" className="w-100" alt="" />
          </Link>
          <Link to="#" className="d-block">
            <img
              src="/assets/images/google-play.jpg"
              className="w-100"
              alt=""
            />
          </Link>
        </div>
        <p className="store-para my-3">Secured Payment Gateways</p>
        <img src="/assets/images/payment-method.png" alt="" />
      </div>
    );
}

export default Right;
