import { put, takeLatest, call } from "redux-saga/effects";
import { CREATE_TODO, READ_TODO, UPDATE_TODO } from "./todo.type";
import { createTodoError, createTodoSuccess, readTodoError, readTodoSuccess, updateTodoError, updateTodoSuccess } from "./todo.actions";
import { mapTodoData } from "./todo.helper";
import fetchApi from "../../utils/api";

export function getTodoApi() {
  return fetchApi('/todos');
}

export function addTodoApi(payload) {
  return fetchApi('/todos', { method: 'POST', body: payload });
}

export function updateTodoApi(payload) {
  return fetchApi('/todos', { method: 'PUT', body: payload });
}

export function* getTodos() {
  try {
    const todoResponse = yield call(getTodoApi);
    const todoData = yield todoResponse.json();
    const mappedTodoData = mapTodoData(todoData);
    yield put(readTodoSuccess(mappedTodoData));
  } catch (error) {
    yield put(readTodoError(error.toString()));
  }
}

export function* addTodos(action) {
  try {
    yield call(addTodoApi, action.payload);
    yield put(createTodoSuccess(action.payload));
  } catch (error) {
    yield put(createTodoError(error.toString()));
  }
}

export function* updateTodos(action) {
  try {
    yield call(updateTodoApi, action.payload);
    yield put(updateTodoSuccess(action.payload));
  } catch (error) {
    yield put(updateTodoError(error.toString()));
  }
}

export function* watchTodos() {
  yield takeLatest(CREATE_TODO, addTodos);
  yield takeLatest(READ_TODO, getTodos);
  yield takeLatest(UPDATE_TODO, updateTodos);
}
