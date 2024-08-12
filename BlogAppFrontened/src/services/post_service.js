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
    .get(
      `/api/posts?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=date&sortDir=desc`
    )
    .then((response) => response.data);
};

// load single post by id

export const loadSinglePost = (postId) => {
  return myAxios.get("/api/posts/" + postId).then((response) => response.data);
};

// commnet

export const createComment = (comment, postId, userId) => {
  return privateAxios.post(
    `/api/post/${postId}/user/${userId}/comments`,
    comment
  );
};
