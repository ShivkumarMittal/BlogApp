import React from "react";
import Base from "../Components/Base";
import userContext from "../context/userContext";
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "reactstrap";
import { FaCommentDots, FaEdit, FaSignInAlt } from "react-icons/fa";

function Services() {
  return (
    <userContext.Consumer>
      {(user) => (
        <Base>
          <Container>
            <Row className="mt-5">
              <Card className="shadow-sm p-3 mb-5 bg-white rounded">
                <CardHeader><h3>Welcome {user.name}</h3></CardHeader>
                <CardBody>
                  <h4><strong>Services provide by our BlogApp Website</strong></h4>
                  <ListGroup className="mt-3">
                    <ListGroupItem>
                      <FaSignInAlt className="mr-2" /> <strong>Home:</strong>
                      <p>
                        If you are not login yet you can see our previous posts.
                      </p>
                    </ListGroupItem>
                    <ListGroupItem>
                      <FaSignInAlt className="mr-2" />{" "}
                      <strong>Login or Register:</strong>
                      <p>
                        If you want to create a post or add a comment, you need
                        to log in or register if you don't have an account.
                      </p>
                    </ListGroupItem>
                    <ListGroupItem>
                      <FaEdit className="mr-2" />{" "}
                      <strong>Create a Post:</strong>
                      <p>
                        Once logged in, you can add your post, upload images,
                        and share your thoughts.
                      </p>
                    </ListGroupItem>
                    <ListGroupItem>
                      <FaEdit className="mr-2" /> <strong>Profile:</strong>
                      <p>
                        After login you see Profile tab in which you can see
                        your details.
                      </p>
                    </ListGroupItem>
                    <ListGroupItem>
                      <FaCommentDots className="mr-2" />{" "}
                      <strong>Comment on Posts:</strong>
                      <p>
                        You can comment on other posts. Remember that you need
                        to be logged in to do so.
                      </p>
                    </ListGroupItem>
                    <ListGroupItem>
                      <FaEdit className="mr-2" /> <strong>Logout:</strong>
                      <p>
                        After login only you see logout tab on navbar at right
                        side if you want you can logout too.
                      </p>
                    </ListGroupItem>
                    <ListGroupItem color="warning">
                      <Badge color="warning" className="mr-2">
                        Note
                      </Badge>
                      <p>
                        Your session will expire after a certain time due to
                        security reason. If you see a message that your session
                        has expired, please log in again.
                      </p>
                    </ListGroupItem>
                  </ListGroup>
                </CardBody>
              </Card>
            </Row>
          </Container>
        </Base>
      )}
    </userContext.Consumer>
  );
}

export default Services;
