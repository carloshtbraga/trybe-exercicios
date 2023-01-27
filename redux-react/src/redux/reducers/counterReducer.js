// ./src/redux/reducers/counterReducer.js
const INITIAL_STATE = {
  count: 0,
  clicks: 0,
  theme: "dark",
};

function counterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return {
        ...state,
        count: state.count + action.payload,
      };
    case "CHANGE_THEME":
      return {
        ...state,
        theme: state.theme === "dark" ? "light" : "dark",
      };
      case "INCREMENT_CLICK":
      return {
        ...state,
        clicks: state.clicks + 1,
      };
    default:
      return state;
  }
}

export default counterReducer;
