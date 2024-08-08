import { privateAxios } from "./helper";
import { myAxios } from "./helper";

export const createPost = (postData) => {
  console.log(postData);
  return privateAxios
    .post(
      `/api/user/${postData.userId}/category/${postData.categoryId}/posts`,
      postData
    )
    .then((resp) => {
      return resp.data;
    });
};

// get all post

export const loadAllPost = (pageNumber, pageSize) => {
  return myAxios
    .get(`/api/posts?pageNumber=${pageNumber}&pageSize=${pageSize}`)
    .then((response) => response.data);
};
