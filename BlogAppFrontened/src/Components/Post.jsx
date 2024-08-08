import React from "react";
import { Button, Card, CardBody, CardText } from "reactstrap";

function Post({
  post = { title: "This is default title", content: "this is default content" },
}) {
  return (
    <Card className="shadow-sm mt-3">
      <CardBody>
        <h3>{post.title}</h3>
        <CardText>{post.content.substring(0,80)}...</CardText>
        <div>
          <Button>Read More</Button>
        </div>
      </CardBody>
    </Card>
  );
}

export default Post;
