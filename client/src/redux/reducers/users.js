const initialState = {
  user: undefined,
  status: "idle",
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_STATUS_LOADING":
      return {
        ...state,
        status: "loading",
      };

    case "USER_STATUS_FAILED":
      return {
        ...state,
        status: "failed",
      };

    case "USER_STATUS_IDLE":
      return {
        ...state,
        status: "idle",
      };

    case "USER_STATUS_COMPLETED":
      return {
        ...state,
        status: "completed",
      };

    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        status: "completed",
      };

    case "GET_ALL_USERS":
      return {
        ...state,
        users: action.payload,
        status: "idle",
      };

    case "GET_USER":
      return {
        ...state,
        user: action.payload,
        status: "idle",
      };

    default:
      return state;
  }
};

export default usersReducer;