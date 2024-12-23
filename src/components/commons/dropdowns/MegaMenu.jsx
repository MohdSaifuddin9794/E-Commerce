import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MegaMenu = () => {
    return (
      <div className="mega-menu p-4  slide-animation">
        <Row>
          <Col sm={2}>
            <h3 className="cat-titles mb-4 mt-0">Fruit & Vegetables</h3>
            <ul className="mega-menu-items">
              <li>
                <Link to="">Meat & Poultry</Link>
              </li>
              <li>
                <Link to="">Fresh Vegetables</Link>
              </li>
              <li>
                <Link to="">Herbs & Seasonings</Link>
              </li>
              <li>
                <Link to="">Meat & Poultry</Link>
              </li>
              <li>
                <Link to="">Meat & Poultry</Link>
              </li>
              <li>
                <Link to="">Meat & Poultry</Link>
              </li>
            </ul>
          </Col>
          <Col sm={2}>
            <h3 className="cat-titles mb-4 mt-0">Breakfast & Dairy</h3>
            <ul className="mega-menu-items">
              <li>
                <Link to="">Milk & Flavoured Milk</Link>
              </li>
              <li>
                <Link to="">Butter and Margarine</Link>
              </li>
              <li>
                <Link to="">Eggs Substitutes</Link>
              </li>
              <li>
                <Link to="">Marmalades</Link>
              </li>
              <li>
                <Link to="">Sour Cream</Link>
              </li>
              <li>
                <Link to="">Cheese</Link>
              </li>
            </ul>
          </Col>
          <Col sm={2}>
            <h3 className="cat-titles mb-4 mt-0">Meat & Seafood</h3>
            <ul className="mega-menu-items">
              <li>
                <Link to="">Breakfast Sausage</Link>
              </li>
              <li>
                <Link to="">Dinner Sausage</Link>
              </li>
              <li>
                <Link to="">Chicken</Link>
              </li>
              <li>
                <Link to="">Sliced Deli Meat</Link>
              </li>
              <li>
                <Link to="">Wild Caught Fillets</Link>
              </li>
              <li>
                <Link to="">Crab and Shellfish</Link>
              </li>
            </ul>
          </Col>
          <Col sm={6}>
            <div className="menu-banner-wrap">
              <Link to={''}>
              <img src="/assets/images/banner-menu.png" alt="" />
              <div className='menu-content'>
                <h4>HOT DEALS</h4>
                  <h3>Don't miss <br /> Trending</h3>
                  <span>Save to 50%</span>
                  <Button className=" btn-shop">Shop now</Button>
              </div>
              <div className='off-deal'>
                25% <br /> off
              </div>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    );
}

export default MegaMenu;
