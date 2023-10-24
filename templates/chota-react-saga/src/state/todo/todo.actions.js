import {
  CREATE_TODO,
  CREATE_TODO_ERROR,
  CREATE_TODO_SUCCESS,
  DELETE_TODO,
  EDIT_TODO,
  READ_TODO,
  READ_TODO_ERROR,
  READ_TODO_SUCCESS,
  UPDATE_TODO,
  UPDATE_TODO_ERROR,
  UPDATE_TODO_SUCCESS,
} from "./todo.type";

let nextTodoId = 0;
export const createTodo = (text) => ({
  type: CREATE_TODO,
  payload: {
    id: nextTodoId++,
    text,
  },
});

export const createTodoSuccess = (payload) => ({
  type: CREATE_TODO_SUCCESS,
  payload,
});

export const createTodoError = (payload) => ({
  type: CREATE_TODO_ERROR,
  payload,
});

export const readTodo = (payload) => ({
  type: READ_TODO,
  payload,
});
export const readTodoSuccess = (payload) => ({
  type: READ_TODO_SUCCESS,
  payload,
});
export const readTodoError = (payload) => ({
  type: READ_TODO_ERROR,
  payload,
});

export const editTodo = (payload) => ({
  type: EDIT_TODO,
  payload,
});

export const updateTodo = (payload) => ({
  type: UPDATE_TODO,
  payload,
});
export const updateTodoSuccess = (payload) => ({
  type: UPDATE_TODO_SUCCESS,
  payload,
});

export const updateTodoError = (payload) => ({
  type: UPDATE_TODO_ERROR,
  payload,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: { id },
});

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  payload: { id },
});
