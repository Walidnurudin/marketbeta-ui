import axios from "../../utils/axios";

export const getDataUser = () => {
  return {
    type: "GET_USER",
    payload: axios.get(`${process.env.REACT_APP_API}user`),
  };
};
