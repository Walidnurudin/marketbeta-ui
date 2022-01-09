const initialState = {
  data: {},
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_PENDING":
      return {
        ...state,
      };
    case "GET_USER_FULFILLED":
      return {
        data: action.payload.data.data,
      };
    case "GET_USER_REJECTED":
      return {
        ...state,
      };

    default: {
      return {
        ...state,
      };
    }
  }
};

export default user;
