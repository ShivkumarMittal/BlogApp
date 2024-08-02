import { myAxios } from "./helper";

export const signup = (user) => {
  return myAxios.post("/api/users/", user).then((response) => response.data);
};
