import React, { useEffect, useState } from "react";
import Base from "../Components/Base";
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
  const resetData=()=>{
    setData({
      name:'',
      email:'',
      password:'',
      about:''
    })
  }

  //submit the form
  const submitForm=(event)=>{
    event.preventDefault()

    //data validate on client side

    // call server api for sending data
  }
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
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label for="email">Enter Email</Label>
                <Input
                  type="email"
                  placeholder="Enter Email here"
                  id="email"
                  onChange={(e) => handleChange(e, "email")}
                  value={data.email}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label for="password">Enter Password</Label>
                <Input
                  type="password"
                  placeholder="Enter Password here"
                  id="password"
                  onChange={(e) => handleChange(e, "password")}
                  value={data.password}
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label for="about">Enter About</Label>
                <Input
                  type="textarea"
                  id="about"
                  onChange={(e) => handleChange(e, "about")}
                  value={data.about}
                ></Input>
              </FormGroup>
              <Container className="text-center">
                <Button color="dark">Register</Button>
                <Button onClick={resetData} color="secondary" className="ms-2" type="reset">
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
