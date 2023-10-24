import intialTodoState from "./todo.initial";
import {
  CREATE_TODO,
  CREATE_TODO_ERROR,
  CREATE_TODO_SUCCESS,
  DELETE_TODO,
  EDIT_TODO,
  READ_TODO,
  READ_TODO_ERROR,
  READ_TODO_SUCCESS,
  TOGGLE_TODO,
  UPDATE_TODO,
  UPDATE_TODO_ERROR,
  UPDATE_TODO_SUCCESS,
} from "./todo.type";

const todo = (state = intialTodoState, action) => {
  let todoItems = [];

  switch (action.type) {
    case READ_TODO:
      return {
        ...state,
        isLoading: true,
      };
    case READ_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todoItems: action.payload,
      };
    case READ_TODO_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case CREATE_TODO:
      return {
        ...state,
        isLoading: true,
      };
    case CREATE_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todoItems: [
          ...state.todoItems,
          {
            id: action.payload.id,
            text: action.payload.text,
            completed: false,
          },
        ],
      };
    case CREATE_TODO_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case EDIT_TODO:
      return {
        ...state,
        currentTodoItem: action.payload,
      };
    case UPDATE_TODO:
      todoItems = state.todoItems.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
      return {
        ...state,
        isButtonLoading: true,
        todoItems,
        currentTodoItem: intialTodoState.currentTodoItem,
      };
    case UPDATE_TODO_SUCCESS:
      return {
        ...state,
        isButtonLoading: false
      }
    case UPDATE_TODO_ERROR:
      return {
        ...state,
        error: action.payload,
        isButtonLoading: false
      }
    case TOGGLE_TODO:
      todoItems = state.todoItems.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      return {
        ...state,
        todoItems,
      };
    case DELETE_TODO:
      todoItems = state.todoItems.filter(
        (todo) => todo.id !== action.payload.id
      );
      return {
        ...state,
        todoItems,
        currentTodoItem: intialTodoState.currentTodoItem,
      };
    default:
      return state;
  }
};

export default todo;
