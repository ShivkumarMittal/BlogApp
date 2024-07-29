import React from 'react'
import Base from '../Components/Base'
import { Button, Card, CardBody, CardHeader, Container, Form, FormGroup, Input, Label } from 'reactstrap'

function Login() {
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
            <Form>
              <FormGroup>
                <Label for="email">Enter Email</Label>
                <Input
                  type="email"
                  placeholder="Enter Email here"
                  id="email"
                ></Input>
              </FormGroup>
              <FormGroup>
                <Label for="password">Enter Password</Label>
                <Input
                  type="password"
                  placeholder="Enter Password here"
                  id="password"
                ></Input>
              </FormGroup>
              <Container className="text-center">
                <Button color="dark">Login</Button>
                <Button color="secondary" className="ms-2" type="reset">
                  Reset
                </Button>
              </Container>
            </Form>
          </CardBody>
        </Card>
      </Container>
    </Base>
    
    
  )
}

export default Login