const initialState = {
  count: 0,
};

function counter(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
      };
    case "ADD":
      return {
        count: state.count + action.payload,
      };
    default:
      return state;
  }
}

export default counter;
