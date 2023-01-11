// Action Type
const INCREASE = "counter/increase";

// Action Creator
export const increaseCounter = () => {
  return {
    type: INCREASE,
  };
};

// counter Reducer
const INITIAL_STATE = { value: 0 };

export default function counterReducer(state = INITIAL_STATE, action) {
  // 내가 처리할 액션인지 판단

  if (action.type === INCREASE) {
    // state + 1
    return {
      value: state.value + 1,
    };
  }

  return state;
}
