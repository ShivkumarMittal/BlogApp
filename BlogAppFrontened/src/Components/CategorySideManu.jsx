import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { loadAllCategories } from "../services/category_service";
import { Link } from "react-router-dom";

function CategorySideManu() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    loadAllCategories()
      .then((data) => {
        console.log(data);
        setCategories([...data]);
      })
      .catch((error) => toast.error("Error in loading category"));
  }, []);
  return (
    <div>
      <ListGroup>
        <ListGroupItem tag={Link} to="/" action={true}>
          All Blogs
        </ListGroupItem>
        {categories &&
          categories.map((cat, index) => {
            return (
              <ListGroupItem
                tag={Link}
                to={"/categories/" + cat.categoryId}
                action={true}
                key={index}
              >
                {cat.categoryTitle}
              </ListGroupItem>
            );
          })}
      </ListGroup>
    </div>
  );
}

export default CategorySideManu;
