import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import CustomerReview from "../CustomerReview/CustomerReview.jsx";
import { useReviews } from "../../Hooks/useReviews.jsx";
import Reviews from "../Reviews/Reviews.jsx";
import SliceReviews from "../SliceReviews/SliceReviews.jsx";

const Home = () => {
  const { reviews } = useReviews();
  return (
    <Container>
      <div>
        <Row className="d-flex align-items-center my-5 ">
          <Col md={6} xs={12}>
            <h1 className="text-content">
              There's Beauty<br></br>
              <span className="color-text"> In Simplicity</span>
            </h1>
            <p>
              Compact. Versatile. Powerful. Canon cameras have been known for
              these attributes and more in our DSLR, mirrorless and compact
              cameras. You’ll be able to clearly capture high-quality still
              shots and videos with multiple helpful features.
            </p>
            <button className="button-style">Live Demo</button>
          </Col>
          <Col md={6} xs={12}>
            <img
              className="img-fluid"
              src="https://www.backscatter.com/ITEM_IMAGES/cn-8035b002_1.jpg"
              alt=""
            />
          </Col>
        </Row>
      </div>
      <div>
        <h1>this is reviews</h1>
        {/* <Row xs={1} md={3} className="g-4 ">
            {reviews.slice(0, 4).map((review) => (
              <CustomerReview review={review}></CustomerReview>
            ))}
          </Row> */}
        <SliceReviews></SliceReviews>
      </div>
    </Container>
  );
};

export default Home;
