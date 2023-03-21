import { thunk } from "./thunk";

describe("thunk", () => {
  let dispatch, getState, next, store;
  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
    next = jest.fn();
    store = { dispatch, getState };
  });

  test("thunk should call action when action is function", () => {
    const action = jest.fn();

    const thunkMiddleware = thunk(store)(next);
    thunkMiddleware(action);

    expect(action).toHaveBeenCalled();
    expect(action).toHaveBeenCalledWith(dispatch, getState);
  });

  test("thunk should call next with action when action is object", () => {
    const action = {};

    const thunkMiddleware = thunk(store)(next);
    thunkMiddleware(action);

    expect(next).toHaveBeenCalledWith(action);
  });
});

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
  const dispatch = jest.fn();
  const getState = jest.fn();
  const next = jest.fn();

  const store = {
    dispatch: dispatch,
    getState: getState,
  };

  return { store, next };
}
