import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import CategorySideManu from "../Components/CategorySideManu";
import Base from "../Components/Base";
import { loadAllCategories } from "../services/category_service";
import { loadPostCategoriesWise } from "../services/post_service";
import { toast } from "react-toastify";
import Post from "../Components/Post";

function Categories() {
  const [post, setPost] = useState([]);
  const { categoryId } = useParams();
  useEffect(() => {
    loadPostCategoriesWise(categoryId)
      .then((data) => {
        setPost([...data]);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error is loading post");
      });
  }, [categoryId]);
  return (
    <Base>
      <Container style={{ maxWidth: "2000px" }} className="mt-3">
        <Row>
          <Col xs="2" className="pt-5">
            <CategorySideManu />
          </Col>
          <Col xs="10">
            {post &&
              post.map((post, index) => {
                return <Post key={index} post={post} />;
              })}
          </Col>
        </Row>
      </Container>
    </Base>
  );
}

export default Categories;
