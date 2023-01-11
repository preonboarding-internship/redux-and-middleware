export const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("dispatching: ", action);
  next(action);
  console.log("state: ", store.getState());
  console.groupEnd();
};
