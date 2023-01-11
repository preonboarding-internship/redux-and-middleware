// Action Type
const INCREASE = "counter/increase";
//
// Action
//
// Action Creator
const increaseCounter = () => {
  return {
    type: INCREASE,
  };
};
//
// reducer
const INITIAL_STATE = 0;

const counterReducer = (prevState = INITIAL_STATE, action) => {
  if (action.type === INCREASE) {
    return prevState + 1;
  }

  return prevState;
};

export { increaseCounter };
export default counterReducer;
