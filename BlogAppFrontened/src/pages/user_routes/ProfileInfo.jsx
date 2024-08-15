import React, { useContext, useEffect, useState } from "react";
import Base from "../../Components/Base";
import userContext from "../../context/userContext";
import { useParams } from "react-router-dom";
import { getUserProfile } from "../../services/user_service";
import { Card, CardBody, Col, Container, Row, Table } from "reactstrap";
import profilePic from "../../assets/profile.png";

function ProfileInfo() {
  const object = useContext(userContext);
  const { userId } = useParams();
  // console.log(userId);

  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserProfile(userId).then((data) => {
      console.log(data);
      setUser({ ...data });
    });
  }, []);

  return (
    <Base>
      <Container>
        <Row>
          <Col className="mt-5">
            <Card>
              <CardBody>
                <h3>User profile</h3>
                <Container className="text-center">
                  <img
                    src={profilePic}
                    alt="profile pic"
                    style={{ maxWidth: "10%" }}
                  />
                </Container>
                <Table responsive striped className="text-center" hover bordered={true}>
                  <tbody>
                    <tr>
                      <td>UserId:</td>
                      <td>{user?.id}</td>
                    </tr>
                    <tr>
                      <td>UserName:</td>
                      <td>{user?.name}</td>
                    </tr>
                    <tr>
                      <td>UserEmail:</td>
                      <td>{user?.email}</td>
                    </tr>
                    <tr>
                      <td>About User:</td>
                      <td>{user?.about}</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
}

export default ProfileInfo;
