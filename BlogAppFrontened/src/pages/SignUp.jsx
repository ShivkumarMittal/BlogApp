import React, { useEffect, useState } from "react";
import Base from "../Components/Base";
import { signup } from "../services/user_service";
import { toast } from "react-toastify";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

function SignUp() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  //handle change
  const handleChange = (event, field) => {
    // console.log(`name changed , ${event.target.value}`);
    setData({ ...data, [field]: event.target.value });
    // console.log(data)
  };

  //reseting the form
  const resetData = () => {
    setData({
      name: "",
      email: "",
      password: "",
      about: "",
    });
  };

  //submit the form
  const submitForm = (event) => {
    event.preventDefault();

    // if (error.isError) {
    //   toast.error("Form data is invalid , Please correct it for registration");
    //   // it means error abhi hai yaha se return karenge
    //   return;
    // }

    console.log(data);

    //data validate on client side

    // call server api for sending data
    signup(data)
      .then((resp) => {
        console.log(resp);
        console.log("success log");
        toast.success("User register successfully");
        setData({
          name: "",
          email: "",
          password: "",
          about: "",
        });
      })
      .catch((error) => {
        console.log(error);
        console.log("error log");
        // handle error is proper manner
        setError({
          errors: error,
          isError: true,
        });
      });
  };
  return (
    <Base>
      <Container className="p-5">
        <Card className="p-2">
          <CardHeader>
            <h2 className="text-center text-black">
              Fill Information to Register
            </h2>
          </CardHeader>
          <CardBody>
            <Form onSubmit={submitForm}>
              <FormGroup>
                <Label for="name">Enter Name</Label>
                <Input
                  type="text"
                  placeholder="Enter Name here"
                  id="name"
                  onChange={(e) => handleChange(e, "name")}
                  value={data.name}
                  invalid={error.errors?.response?.data.name ? true : false}
                ></Input>
                <FormFeedback>{error.errors?.response?.data.name}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="email">Enter Email</Label>
                <Input
                  type="email"
                  placeholder="Enter Email here"
                  id="email"
                  onChange={(e) => handleChange(e, "email")}
                  value={data.email}
                  invalid={error.errors?.response?.data.email ? true : false}
                ></Input>
                <FormFeedback>{error.errors?.response?.data.name}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="password">Enter Password</Label>
                <Input
                  type="password"
                  placeholder="Enter Password here"
                  id="password"
                  onChange={(e) => handleChange(e, "password")}
                  value={data.password}
                  invalid={error.errors?.response?.data.password ? true : false}
                ></Input>
                <FormFeedback>{error.errors?.response?.data.name}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="about">Enter About</Label>
                <Input
                  type="textarea"
                  id="about"
                  onChange={(e) => handleChange(e, "about")}
                  value={data.about}
                  invalid={error.errors?.response?.data.about ? true : false}
                ></Input>
                <FormFeedback>{error.errors?.response?.data.name}</FormFeedback>
              </FormGroup>
              <Container className="text-center">
                <Button color="dark">Register</Button>
                <Button
                  onClick={resetData}
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

export default SignUp;
