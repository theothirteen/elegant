const config = {
  apiEndpoint: "http://localhost:3000/api",
};

const TODO = "todo";

export default function fetchApi(path = "", options = {}) {
  return fetch(config.apiEndpoint + path, options);
}

const wait = (callback, t) =>
  new Promise((resolve) => setTimeout(() => resolve(callback()), t));

export const getTodo = async (mockError) => {
  try {
    if (mockError) throw new Error();
    const todoResponse = await wait(() => localStorage.getItem(TODO), 500);
    return JSON.parse(todoResponse);
  } catch (e) {
    const message = "Unable to get Items";
    console.error(message);
    return { message };
  }
};

export const modifyTodo = async (modifyAction, {todoItem, mockError}) => {
  try {
    if (mockError) throw new Error();
    const todoList = await getTodo();
    const newTodoListJson = modifyAction(todoList);
    await wait(() => localStorage.setItem(TODO, newTodoListJson), 200);
    return todoItem;
  } catch (e) {
    const message = "unable to modify Item";
    console.error(message);
    return { message };
  }
};

export const addTodo = async (todoItem, mockError) => modifyTodo((todoList) => {
  todoList.push(todoItem);
  return JSON.stringify(todoList);
}, { todoItem, mockError });

export const updateTodo = async (todoItem, mockError) => modifyTodo((todoList) => {
  const newTodoList = todoList.map(td => td.id === todoItem.id ? { ...td, todoItem } : td);
  return JSON.stringify(newTodoList);
}, { todoItem, mockError });

export const removeTodo = async (todoItem, mockError) => modifyTodo((todoList) => {
  const newTodoList = todoList.filter(td => td.id !== todoItem.id);
  return JSON.stringify(newTodoList);
}, { todoItem, mockError });