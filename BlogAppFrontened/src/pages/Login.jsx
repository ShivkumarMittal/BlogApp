import React, { useState } from "react";
import Base from "../Components/Base";
import { toast } from "react-toastify";
import { doLogin } from "../auth";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { login } from "../services/user_service";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate()
  const [loginDetail, setLoginDetail] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setLoginDetail({
      ...loginDetail,
      // this override the username or password key with actualValue
      [field]: actualValue,
    });
  };

  const FormSubmit = (event) => {
    event.preventDefault();
    console.log(loginDetail);
    console.log(event.target.value);
    // validation
    if (
      loginDetail.userName.trim() == "" ||
      loginDetail.password.trim() == ""
    ) {
      toast.error("Username or Password is required ");
      return;
    }

    // submit data to server to generate token
    login(loginDetail)
      .then((data) => {
        console.log("user login");
        // console.log(jwtTokenData);
        // save the data to localstorage
        doLogin(data, () => {
          console.log("login detail save to localstorage");
          // redirect to user dashboard 
          navigate("/user/dashboard")

        });
        toast.success("Login successfully");
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status == 400 || error.response.status == 404) {
          toast.error("Incorrect Details");
        } else {
          toast.error("Something went wrong");
        }
      });
  };

  const handleReset = (event) => {
    setLoginDetail({
      userName: "",
      password: "",
    });
  };
  return (
    <Base>
      <Container className="p-5">
        <Card className="p-2">
          <CardHeader>
            <h2 className="text-center text-black">
              Fill Information to Login
            </h2>
          </CardHeader>
          <CardBody>
            <Form onSubmit={FormSubmit}>
              <FormGroup>
                <Label for="email">Enter Email</Label>
                <Input
                  type="email"
                  placeholder="Enter Email here"
                  id="email"
                  value={loginDetail.userName}
                  onChange={(e) => handleChange(e, "userName")}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label for="password">Enter Password</Label>
                <Input
                  type="password"
                  placeholder="Enter Password here"
                  id="password"
                  value={loginDetail.password}
                  onChange={(e) => handleChange(e, "password")}
                ></Input>
              </FormGroup>
              <Container className="text-center">
                <Button color="dark">Login</Button>
                <Button
                  onClick={handleReset}
                  color="secondary"
                  className="ms-2"
                  type="reset"
                >
                  Reset
                </Button>
              </Container>
            </Form>
          </CardBody>
        </Card>
      </Container>
    </Base>
  );
}

export default Login;
