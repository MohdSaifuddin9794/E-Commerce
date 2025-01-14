import React from 'react';
import { Button } from 'react-bootstrap';
import { FiSend } from 'react-icons/fi';

const Newsletter = () => {
    return (
      <>
        <div className="position-relative newsletter-inner">
          <div className="newsletter-content">
            <h2>
              Stay home & get your daily <br /> needs from our shop
            </h2>
            <p>
              Start You'r Daily Shopping with{" "}
              <span className="text-brand">Nest Mart.</span>
            </p>
            <div className="d-flex align-items-center gap-2 slider-box">
              <FiSend />{" "}
              <input
                type="text"
                placeholder="Your email address"
                className="form-control border-0"
              />
              <Button className="Subscribe">Subscribe</Button>
            </div>
          </div>
          <img src="./assets/images/banner-9.png" alt="" />
        </div>
        <div className="mb-4 shipping-post">
          <div className="d-flex align-items-center gap-4">
            <div className="d-flex aling-items-center gap-3  items-ship">
              <img src="/assets/images/icon-1.svg" alt="" />
              <div className="content pt-2">
                <h3>Best prices & offers</h3>
                <p>Orders $50 or more</p>
              </div>
            </div>
            <div className="d-flex aling-items-center gap-3  items-ship">
              <img src="/assets/images/icon-2.svg" alt="" />
              <div className="content pt-2">
                <h3>Free delivery</h3>
                <p>24/7 amazing services</p>
              </div>
            </div>
            <div className="d-flex aling-items-center gap-3  items-ship">
              <img src="/assets/images/icon-3.svg" alt="" />
              <div className="content pt-2">
                <h3>Great daily deal</h3>
                <p>When you sign up</p>
              </div>
            </div>
            <div className="d-flex aling-items-center gap-3  items-ship">
              <img src="/assets/images/icon-4.svg" alt="" />
              <div className="content pt-2">
                <h3>Wide assortment</h3>
                <p>Mega Discounts</p>
              </div>
            </div>
            <div className="d-flex aling-items-center gap-3  items-ship">
              <img src="/assets/images/icon-5.svg" alt="" />
              <div className="content pt-2">
                <h3>Easy returns</h3>
                <p>Within 30 days</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Newsletter;
