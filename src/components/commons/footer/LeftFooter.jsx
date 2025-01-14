import React from 'react';
import { Link } from 'react-router-dom';
import "./FooterCSS/footer.css";
const LeftFooter = () => {
    return (
      <div className="leftFooter">
        <div>
          <Link to="/">
            <img src="/assets/images/logo.svg" alt="" />
          </Link>
          <p className="store-para my-3">
            Awesome grocery store website template
          </p>
          <ul className="leftFooterAddress ps-0">
            <li className="">
              <img src="/assets/images/icon-location.svg" alt="" />{" "}
              <strong>Address:</strong>{" "}
              <span>
                5171 W Campbell Ave undefined Kent, Utah 53127 United States
              </span>
            </li>
            <li className="">
              <img src="/assets/images/icon-contact.svg" alt="" />{" "}
              <strong>Call Us:</strong>
              <span>(+91) - 540-025-124553</span>
            </li>
            <li className="">
              <img src="/assets/images/icon-email-2.svg" alt="" />{" "}
              <strong>Email:</strong> <span>sale@Nest.com</span>
            </li>
            <li className="">
              <img src="/assets/images/icon-clock.svg" alt="" />{" "}
              <strong>Hours:</strong>{" "}<span>10:00 - 18:00, Mon - Sat</span>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default LeftFooter;
