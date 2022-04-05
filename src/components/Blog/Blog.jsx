import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Blog = () => {
  return (
    <div>
      <Container>
        <Row className="d-flex align-items-center my-5 ">
          <Col md={6} xs={12}>
            <h4 className="text-primary ">1.What Is Context Api?</h4>
            <p className="border border-info p-3">
              <strong className="text-success">Answer: </strong>
              The React Context API is a way for a React app to effectively
              produce global variables that can be passed around. This is the
              alternative to "prop drilling" or moving props from grandparent to
              child to parent, and so on. Context is also touted as an easier,
              lighter approach to state management using Redux. Context API is a
              (kind of) new feature added in version 16.3 of React that allows
              one to share state across the entire app (or part of it) lightly
              and with ease.
            </p>
          </Col>
          <Col md={6} xs={12}>
            <h4 className="text-primary">2.What is Semantic tag?</h4>
            <p className="border border-info p-3 ">
              <strong className="text-success">Answer: </strong>Semantic HTML
              tags allow you to add meaning to your markup so that search
              engines, screen readers, and web browsers can make sense of it. By
              default, when a user agent reads your content it doesn’t
              understand the context and meaning. Semantic HTML tags let you
              serve structured content to your users, which is especially
              important for on-page SEO and accessibility.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
<h1>this is blog container</h1>;
