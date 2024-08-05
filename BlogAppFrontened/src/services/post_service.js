import { privateAxios } from "./helper";

export const createPost = (postData) => {
  console.log(postData);
  return privateAxios
    .post(
      `/api/post/user/${postData.userId}/category/${postData.categoryId}/posts`,
      postData
    )
    .then((resp) => {
      return resp.data;
    });
};
