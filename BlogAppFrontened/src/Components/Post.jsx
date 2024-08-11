import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardText } from "reactstrap";

function Post({
  post = {postId:0, title: "This is default title", content: "this is default content" },
}) {
  return (
    <Card className="shadow-sm mt-3">
      <CardBody>
        <h3>{post.title}</h3>
        <CardText
          dangerouslySetInnerHTML={{
            __html: post.content.substring(0, 80) + "...",
          }}
        ></CardText>
        <div>
          <Link className =" btn btn-secondary" to={'/post/'+post.postId}>Read More</Link>
        </div>
      </CardBody>
    </Card>
  );
}

export default Post;
