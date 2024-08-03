import { myAxios } from "./helper";

export const signup = (user) => {
  return myAxios.post("/api/users/", user).then((response) => response.data);
};

export const login = (loginDetail) => {
  return myAxios.post("/api/v1/auth/login", loginDetail).then((response) => response.data);
};
