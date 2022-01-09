import axios from "../../utils/axios";

export const getDataUser = () => {
  return {
    type: "GET_USER",
    payload: axios.get(`user`),
  };
};
