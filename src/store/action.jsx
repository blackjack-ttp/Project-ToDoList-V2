//* IMPORT TYPE
import * as types from './type';

export const addTodoAction = (data) => {
  return {
    type: types.ADD_TODO,
    payload: data,
  };
};
export const editItemTodoAction = (index, data) => {
  return {
    type: types.EDIT_TODO,
    payload: { index, data },
  };
};
export const removeItemTodoAction = (index) => {
  return {
    type: types.REMOVE_ITEM_TODO,
    payload: index,
  };
};
export const clearTodoAction = (index) => {
  return {
    type: types.REMOVE_ITEM_TODO,
    payload: index,
  };
};

export const getTodoAction = (data) => {
  return {
    type: types.GET_ITEM_TODO,
    payload: data,
  };
};
