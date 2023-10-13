//* IMPORT TYPE
import * as types from './type';

export const addTodoAction = (data) => {
  return {
    type: types.ADD_TODO,
    payload: data,
  };
};
export const editItemTodoAction = (index) => {
  return {
    type: types.REMOVE_ITEM_TODO,
    payload: index,
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
