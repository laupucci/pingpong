const initialState = {
  matches: [],
  match: {},
  status: "idle",
};

const matchesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MATCH_STATUS_LOADING":
      return {
        ...state,
        status: "loading",
      };

    case "MATCH_STATUS_FAILED":
      return {
        ...state,
        status: "failed",
      };


    case "GET_MATCH":
      return {
        ...state,
        match: action.payload,
        status: "idle",
      };

      case "SET_MATCH":
        return {
          ...state,
          match: {},
          status: "idle",
        };

    case "SAVE_MATCH":
      return {
        ...state,
        match: action.payload,
        status: "idle",
      };

    case "ALL_MATCHES":
      return {
        ...state,
        matches: action.payload,
        status: "idle",
      };

      case "ALL_MATCHES_BY_USER":
        return {
          ...state,
          matches: action.payload,
          status: "idle",
        };


    default:
      return state;
  }
};

export default matchesReducer;
