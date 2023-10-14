//* LIB
import { v4 as uuid } from 'uuid';

//* IMPORT TYPE
import * as types from './type';

//* UTIL
import { SetLocalStorage, GetLocalStorage } from '@/utils/LocalStorage';

export const initState = {
  todos: [],
  loading: false,
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      const newTodo = [
        ...state.todos,
        {
          id: uuid(),
          task: action.payload.task_title,
          description: action.payload.task_description,
        },
      ];
      SetLocalStorage('todos', newTodo);

      return {
        ...state,
        todos: newTodo,
      };

    case types.GET_ITEM_TODO:
      const Items = GetLocalStorage('todos');
      console.info(Items);
      return {
        ...state,
        todos: Items,
      };

    case types.EDIT_TODO:
      const filterTodoByEditTodo = state.todos.filter((todo) => {
        if (todo.id !== action.payload) {
          todo.task != action.payload.task_title;
          todo.description != action.payload.task_description;
        }
      });
      SetLocalStorage('todos', filterTodoByEditTodo);

      return {
        ...state,
        todos: filterTodoByEditTodo,
      };

    case types.REMOVE_ITEM_TODO:
      const filterTodoByremoveItem = state.todos.filter((todo) => todo.id !== action.payload);
      SetLocalStorage('todos', filterTodoByremoveItem);

      return {
        ...state,
        todos: filterTodoByremoveItem,
      };

    default:
      return state;
  }
};

export default todoReducer;
