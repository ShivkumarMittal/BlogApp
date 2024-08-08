import React, { useEffect, useRef, useState } from "react";
import { Button, Card, CardBody, Container, Form, Label } from "reactstrap";
import { Input } from "reactstrap";
import { loadAllCategories } from "../services/category_service";
import { toast } from "react-toastify";
import JoditEditor from "jodit-react";
import { createPost as docreatePost } from "../services/post_service";
import { getCurrentUser } from "../auth";

function AddPost() {
  const editor = useRef(null);
  const [user, setuser] = useState(undefined);
  const [categories, setCategories] = useState([]);
  const [post, setPost] = useState({
    title: "",
    content: "",
    categoryId: -1,
  });
  // const config = {
  //   placeholder: "Write here about your post.....",
  // };
  useEffect(() => {
    setuser(getCurrentUser());
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

  const fieldChanged = (event) => {
    // console.log(event);

    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const contentfieldChange = (data) => {
    setPost({ ...post, content: data });
  };
  // const handleEditorChange = (newContent) => {
  //   console.log("Editor content changed:", newContent); // Debugging
  //   setPost((prevPost) => ({
  //     ...prevPost,
  //     content: newContent,
  //   }));
  // };

  const createPost = (event) => {
    event.preventDefault();
    console.log("form ", event);
    if (post.title.trim() === "") {
      alert("Post title is required");
      return;
    }
    if (post.content.trim() === "") {
      alert("Post content is required !!");
      return;
    }
    if (post.categoryId === -1) {
      alert("select category of post !!");
      return;
    }
    // submit form
    post["userId"] = user.id;
    docreatePost(post)
      .then((data) => {
        toast.success("Post Created");
        setPost({
          title: "",
          content: "",
          categoryId: -1,
        });
        // console.log(data);
      })
      .catch((error) => {
        // alert("error");
        // console.log(error);
        toast.error("Error Come");
      });
  };
  return (
    <div>
      <Card className="my-5 border-0">
        <CardBody>
          {/* {JSON.stringify(post)} */}
          <h3>Fill info for post</h3>
          <Form className="my-3" onSubmit={createPost}>
            <div>
              <Label for="title">Post title</Label>
              <Input
                type="text"
                id="title"
                placeholder="Enter here"
                name="title"
                onChange={fieldChanged}
              />
            </div>
            <div className="my-3">
              <Label for="content">Post Content</Label>
              {/* <Input
                type="textarea"
                id="content"
                placeholder="Enter here"
                style={{ height: "300px" }}
              /> */}
              <JoditEditor
                ref={editor}
                // value={content}
                onChange={contentfieldChange}
              />
            </div>
            <div className="my-3">
              <Label for="category">Post Category</Label>
              <Input
                type="select"
                id="category"
                placeholder="Enter here"
                name="categoryId"
                onChange={fieldChanged}
                defaultValue={0}
              >
                <option disabled value={0}>
                  Select category{" "}
                </option>
                {categories.map((category) => (
                  <option value={category.categoryId} key={category.categoryId}>
                    {category.categoryTitle}
                  </option>
                ))}
              </Input>
            </div>
            <Container className="text-center">
              <Button type="submit" color="primary">
                Create Post
              </Button>
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
