//* LIB
import { v4 as uuid } from 'uuid';

//* IMPORT TYPE
import * as types from './type';

//* UTIL
import { SetLocalStorage } from '@/utils/LocalStorage';

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

    case types.REMOVE_ITEM_TODO:
      const filterTodo = state.todos.filter((todo) => todo.id !== action.payload);
      SetLocalStorage('todos', filterTodo);

      return {
        ...state,
        todos: filterTodo,
      };

    default:
      return state;
  }
};

export default todoReducer;
