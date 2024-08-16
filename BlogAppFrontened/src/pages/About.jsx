// import React from "react";
// import Base from "../Components/Base";
// import userContext from "../context/userContext";

// function About() {
//   return (
//     <userContext.Consumer>
//       {(user) => (
//         <Base>

//         </Base>
//       )}
//     </userContext.Consumer>
//   );
// }

// export default About;

import React from "react";
import profilePic from "./../assets/profile.png";
import { FaCommentDots, FaEdit, FaGithub, FaLinkedin, FaSignInAlt } from "react-icons/fa";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Media,
  ListGroup,
  ListGroupItem,
  Progress,
  Button,
  Table,
  Badge,
} from "reactstrap";
import Base from "../Components/Base";

const About = () => {
  return (
    <Base>
      <Container className="mt-5">
        <Row>
          <Col md="4">
            <Media>
              <Media left>
                <Media
                  object
                  src={profilePic}
                  alt="Profile Image"
                  className="img-fluid rounded-circle"
                />
              </Media>
              <Media body className="ml-5 mt-4">
                <h3><strong>Shivkumar Mittal</strong></h3>
                <h4>Final Year Student BTech CSE</h4>
                <h5>Learning Java FullStack</h5>
              </Media>
            </Media>
          </Col>
          <Col md="8">
            <Card>
              <CardBody>
                <h2><strong>About BlogApp Website</strong></h2>
                <h3>
                  Thanks Viewers, for visiting my BlogApp Website. I created
                  this website as my personal project to explore my theoritical
                  knowledge to real world application like this.
                </h3>
                <Table bordered className="mt-5">
                  <thead>
                    <tr>
                      <th>Technology Used</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Backend: SpringBoot</td>
                    </tr>
                    <tr>
                      <td>Frontend: React</td>
                    </tr>
                    <tr>
                      <td>Database: MySQL with Spring Data JPA</td>
                    </tr>
                    <tr>
                      <td>Designing: Reactstrap</td>
                    </tr>
                  </tbody>
                </Table>
                <p>
                  To know more about this project use can refer my github link
                  or can dm me on linkdin
                </p>
              </CardBody>
              <CardBody>
              <Button
                  style={{ backgroundColor: "#4CAF50", borderColor: "#4CAF50" }}
                  className="mx-5"
                >
                  <FaGithub /> Github
                </Button>
                
                <Button
                  style={{ backgroundColor: "#4CAF50", borderColor: "#4CAF50" }}
                  className=" mx-1"
                >
                  <FaLinkedin /> Linkedin
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
        <Card className="shadow-sm p-3 mb-5 bg-white rounded">
            <CardBody>
            <h3>
              We would love if you add your post too and give your valuable feedback to other's post as a comment.
              </h3>
            </CardBody>
          </Card>
        </Row>
      </Container>
    </Base>
  );
};

export default About;
