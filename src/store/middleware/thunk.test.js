import { thunk } from "./thunk";

test("thunk should call action when action is function", () => {
  const { store, next } = setup();

  const action = jest.fn();

  const thunkMiddleware = thunk(store)(next);
  thunkMiddleware(action);

  expect(action).toHaveBeenCalled();
  expect(action).toHaveBeenCalledWith(store.dispatch, store.getState);
});

test("thunk should call next with action when action is object", () => {
  const { store, next } = setup();

  const action = {};

  const thunkMiddleware = thunk(store)(next);

  thunkMiddleware(action);
  expect(next).toHaveBeenCalledWith(action);
});

function setup() {
  const store = {
    dispatch: () => {},
    getState: () => {},
  };

  const next = jest.fn();
  return { store, next };
}
