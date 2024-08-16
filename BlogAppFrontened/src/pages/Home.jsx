import React from "react";
import Base from "../Components/Base";
import NewFeed from "../Components/NewFeed";
import { Col, Container, Row } from "reactstrap";
import CategorySideManu from "../Components/CategorySideManu";

function Home() {
  return (
    <Base>
      <Container style={{ maxWidth: "2000px" }} className="mt-3">
        <Row>
          <Col xs="2" className="pt-5">
            <CategorySideManu />
          </Col>
          <Col xs="10">
            <NewFeed />
          </Col>
        </Row>
      </Container>
    </Base>
  );
}

export default Home;
