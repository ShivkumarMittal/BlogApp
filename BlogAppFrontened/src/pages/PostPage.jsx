import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Base from "../Components/Base";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardText,
  Col,
  Container,
  Input,
  Row,
} from "reactstrap";
import { createComment, loadSinglePost } from "../services/post_service";
import { toast } from "react-toastify";
import { BASE_URL } from "../services/helper";
import { getCurrentUserId, isLoggedIn } from "../auth";

function PostPage() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState({
    comment: "",
  });

  const [login, setlogin] = useState(false);
  const [userId, setUserId] = useState(-1000);

  useEffect(() => {
    setlogin(isLoggedIn());
    if (login == true) {
      setUserId(getCurrentUserId);
    }
  }, [login]);

  useEffect(() => {
    // load post by postId
    loadSinglePost(postId)
      .then((data) => {
        console.log(data);
        setPost(data);
      })
      .catch((error) => {
        console.log(error);
        toast.error("error");
      });
  }, []);

  const submitComment = () => {
    if (!isLoggedIn()) {
      toast.error("Need to login firsst");
    }
    if (comment.comment.trim() == "") {
      return;
    }
    createComment(comment, post.postId, userId)
      .then((data) => {
        console.log(data);
        toast.success("Comment added successfully !!");
        setPost({
          ...post,
          comments: [...post.comments, data.data],
        });
        setComment({
          comment: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const printDate = (number) => {
    return new Date(number).toLocaleString();
  };
  return (
    <Base>
      <Container>
        <Link to="/">Home</Link>
        <Row>
          <Col md={{ size: 12 }}>
            <Card className="mt-3">
              {post && (
                <CardBody>
                  <CardHeader>
                    Posted By <b>{post?.user.name}</b> on{" "}
                    <b>{printDate(post.date)}</b>
                  </CardHeader>
                  <CardHeader>
                    <span>{post.category.categoryTitle}</span>
                  </CardHeader>
                  <CardText>
                    <h3>{post.title}</h3>
                  </CardText>
                  <div className="image-container mt-3 text-center">
                    <img
                      style={{ maxWidth: "50%" }}
                      className="image-fluid"
                      src={BASE_URL + "/api/post/image/" + post.imageName}
                      alt="Image not added by Post Creator !!"
                    ></img>
                  </div>
                  <CardText
                    className="mt-5"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  ></CardText>
                </CardBody>
              )}
            </Card>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col
            md={{
              size: 6,
              offset: 2,
            }}
          >
            <h1>Total Comments {post ? post.comments.length : 0}</h1>
            {post?.comments &&
              post.comments.map((c, index) => (
                <Card className="mt-2 " key={index}>
                  <CardHeader>Commented by : {c.userName}</CardHeader>
                  <CardBody>
                    <CardText>{c.comment}</CardText>
                  </CardBody>
                </Card>
              ))}
            <Card className="mt-2 ">
              <CardHeader>Please give your comment !!</CardHeader>
              <CardBody>
                <Input
                  type="textarea"
                  placeholder="enter Comment here"
                  value={comment.comment}
                  onChange={(event) =>
                    setComment({ comment: event.target.value })
                  }
                />
                <Button
                  onClick={submitComment}
                  color="primary"
                  className="mt-4"
                >
                  Submit
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
}

export default PostPage;
