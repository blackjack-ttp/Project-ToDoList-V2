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
          task: action.payload.task,
          description: action.payload.description,
        },
      ];
      SetLocalStorage('todos', newTodo);

      return {
        ...state,
        todos: newTodo,
      };

    case types.GET_ITEM_TODO:
      const Items = GetLocalStorage('todos');
      return {
        ...state,
        todos: Items,
      };

    case types.EDIT_TODO:
      const updatedTodos = state.todos.map((todo) => {
        console.info(action.payload, '========action payload ============');
        console.info(action.payload.index, '========edit reducer =======id=====');
        if (todo.id === action.payload.index) {
          return {
            ...todo,
            task: action.payload.data.task,
            description: action.payload.data.description,
          };
        }
        return todo;
      });
      SetLocalStorage('todos', updatedTodos);

      return {
        ...state,
        todos: updatedTodos,
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
