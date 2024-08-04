import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, Container, Form, Label } from "reactstrap";
import { Input } from "reactstrap";
import { loadAllCategories } from "../services/category_service";

function AddPost() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    loadAllCategories()
      .then((data) => {
        console.log(data);
        setCategories(data);
        console.log(categories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <Card className="my-5 border-0">
        <CardBody>
          <h3>Fill info for post</h3>
          <Form className="my-3">
            <div>
              <Label for="title">Post title</Label>
              <Input type="text" id="title" placeholder="Enter here" />
            </div>
            <div className="my-3">
              <Label for="content">Post Content</Label>
              <Input
                type="textarea"
                id="content"
                placeholder="Enter here"
                style={{ height: "300px" }}
              />
            </div>
            <div className="my-3">
              <Label for="category">Post Category</Label>
              <Input type="select" id="category" placeholder="Enter here">
                {categories.map((category) => (
                  <option value={category.categoryId} key={category.categoryId}>{category.categoryTitle}</option>
                ))}
              </Input>
            </div>
            <Container className="text-center">
              <Button color="primary">Create Post</Button>
              <Button className="ms-2" color="danger">
                Reset
              </Button>
            </Container>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}

export default AddPost;
