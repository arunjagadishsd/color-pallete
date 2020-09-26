const INITIAL_STATE = { red: 0, blue: 0, green: 0 };

const reducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case "red":
      return {
        ...state,
        red: state["red"] + actions.payload,
      };
    case "blue":
      return {
        ...state,
        blue: state[actions.type] + actions.payload,
      };
    case "green":
      return {
        ...state,
        green: state[actions.type] + actions.payload,
      };

    default:
      return state;
  }
};

export default reducer;
