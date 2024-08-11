import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Base from "../Components/Base";
import {
  Card,
  CardBody,
  CardHeader,
  CardText,
  Col,
  Container,
  Row,
} from "reactstrap";
import { loadSinglePost } from "../services/post_service";
import { toast } from "react-toastify";
import { BASE_URL } from "../services/helper";

function PostPage() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

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
      </Container>
    </Base>
  );
}

export default PostPage;
