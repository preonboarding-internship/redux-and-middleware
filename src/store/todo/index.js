const LOAD_TODO = "todo/loadTodo";

export const loadTodo = (todos) => ({ type: LOAD_TODO, payload: todos });

const INITIAL_STATE = {
  todos: [],
};

export default function todoReducer(state = INITIAL_STATE, { type, payload }) {
  if (type === LOAD_TODO) {
    return {
      todos: [...state.todos, ...payload],
    };
  }

  return state;
}
