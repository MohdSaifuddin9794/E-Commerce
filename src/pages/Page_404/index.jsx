import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { CiSearch } from 'react-icons/ci';
import { HiOutlineHome } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const  Page_404 = () => {
    return (
      <>
        <section className="page-content py-5">
          <div className="container py-5">
            <Row>
              <Col xl={8} lg={10} md={12} className="m-auto text-center">
                <div className="mb-3">
                  <img src="/assets/images/page-404.png" alt="" />
                </div>
                <h1 className="page-found-heading">Page Not Found</h1>
                <p>
                  The link you clicked may be broken or the page may have been
                  removed. <br /> visit the <Link>Homepage</Link> or{" "}
                  <Link>Contact us</Link> about the problem{" "}
                </p>
                <div className="search-form">
                  <form action="">
                    <input type="text" />
                    <Button>
                      <CiSearch />
                    </Button>
                  </form>
                  <Link className="btn primary-btn" to="/home">
                    <HiOutlineHome /> Back to Home
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </>
    );
}

export default Page_404;
