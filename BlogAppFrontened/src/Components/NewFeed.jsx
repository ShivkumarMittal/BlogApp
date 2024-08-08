import React, { useState } from "react";
import { useEffect } from "react";
import { loadAllPost } from "../services/post_service";
import {
  Row,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Container,
} from "reactstrap";
import Post from "./Post";
import { toast } from "react-toastify";

function NewFeed() {
  const [postContent, setpostContent] = useState({
    content: [],
    totalPages: "",
    total_Elements: "",
    pageSize: "",
    lastPage: false,
    pageNumber: "",
  });
  useEffect(() => {
    // load all post from server
    loadAllPost(0, 5)
      .then((data) => {
        console.log(data);
        setpostContent(data);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error in loading post");
      });
  }, []);

  const changePage = (pageNumber = 0, pageSize = 5) => {
    loadAllPost(pageNumber, pageSize)
      .then((data) => {
        console.log(data);
        setpostContent(data);
        window.scroll(0, 0);
      })
      .catch((error) => {
        toast.error("Error in loading post");
      });
  };
  return (
    <div className="container-fluid">
      <Row>
        <Col
          md={{
            size: 10,
            offset: 1,
          }}
        >
          <h1>Blogs count {postContent?.total_Elements}</h1>
          {postContent?.content.map((post) => (
            <Post post={post} />
          ))}

          <Container className="text-center mt-3">
            <Pagination size="lg">
              <PaginationItem disabled={postContent.pageNumber == 0}>
                <PaginationLink previous>Previous</PaginationLink>
              </PaginationItem>
              {[...Array(postContent.totalPages)].map((item, index) => (
                <PaginationItem
                  onClick={() => changePage(index, 5)}
                  active={index == postContent.pageNumber}
                  key={index}
                >
                  <PaginationLink>{index + 1}</PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem
                onClick={() => changePage(++postContent.pageNumber)}
                disabled={postContent.lastPage}
              >
                <PaginationLink next>Next</PaginationLink>
              </PaginationItem>
            </Pagination>
          </Container>
        </Col>
      </Row>
    </div>
  );
}

export default NewFeed;
