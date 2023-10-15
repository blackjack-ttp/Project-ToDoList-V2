//* LIB
import { useEffect, useReducer, useState } from 'react';
//* IMPORT
import { ButtonComponent, InputComponent } from '@/imports/component';

//* STORE
import todoReducer, { initState } from '@/store/reducer';
import {
  addTodoAction,
  getTodoAction,
  removeItemTodoAction,
  editItemTodoAction,
} from '@/store/action';

//* SCSS
import '@/styles/pages/todo/style.scss';

const ToDo = () => {
  const [form, setForm] = useState({
    id: '',
    task: '',
    description: '',
  });

  const [edit, setEdit] = useState(false);

  // used useReducer
  const [state, dispatch] = useReducer(todoReducer, initState);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddTodo = (e) => {
    e.preventDefault();

    dispatch(addTodoAction(form));
    handleClearInput();
  };

  const hendleGetItemEdit = (id) => {
    const todoToEdit = state.todos.find((todo) => todo.id === id);
    setEdit(!edit);
    setForm({
      id: todoToEdit.id,
      task: todoToEdit.task,
      description: todoToEdit.description,
    });
    return todoToEdit;
  };

  const handleEditTodo = (e) => {
    e.preventDefault();

    const todoToEdit = state.todos.find((todo) => todo.id === form.id);

    if (!todoToEdit) {
      console.error('Todo not found');
      return;
    }

    dispatch(editItemTodoAction(todoToEdit.id, form));
    handleClearInput();
    setEdit(false);
  };

  const handleDeleteTodo = (id) => {
    dispatch(removeItemTodoAction(id));
  };

  const handleClearInput = () => {
    setForm({
      id: '',
      task: '',
      description: '',
    });
  };

  useEffect(() => {
    dispatch(getTodoAction(state));
  }, []);
  return (
    <>
      <div className="todo-wrapper">
        {edit ? (
          <form onSubmit={handleEditTodo} className="todo-wrapper__input">
            <label htmlFor="task" className="todo-wrapper__input__lable-title">
              Task
            </label>
            <InputComponent
              className="todo-wrapper__input__title"
              title="Task Title"
              id="task"
              type="text"
              name="task"
              value={form.task}
              autoFocus="true"
              onChange={handleChange}
              placeholder="Enter title task"
            />
            <label htmlFor="description" className="todo-wrapper__input__lable-title">
              Description
            </label>
            <InputComponent
              className="todo-wrapper__input__description"
              title="Task Description"
              id="description"
              type="text"
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Enter description task"
            />
            <ButtonComponent className="todo-wrapper__input__btn-add" value="save" />
          </form>
        ) : (
          <form onSubmit={handleAddTodo} className="todo-wrapper__input">
            <label htmlFor="task" className="todo-wrapper__input__lable-title">
              Task
            </label>
            <InputComponent
              className="todo-wrapper__input__title"
              title="Task Title"
              id="task"
              type="text"
              name="task"
              value={form.task}
              autoFocus="true"
              onChange={handleChange}
              placeholder="Enter title task"
            />
            <label htmlFor="description" className="todo-wrapper__input__lable-title">
              Description
            </label>
            <InputComponent
              className="todo-wrapper__input__description"
              title="Task Description"
              id="description"
              type="text"
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Enter description task"
            />
            <ButtonComponent className="todo-wrapper__input__btn-add" value="add" />
          </form>
        )}

        {state?.todos.map((item) => {
          return (
            <>
              <ul className="todo-wrapper__listTodo">
                <li key={item.id} className="todo-wrapper__listTodo__item">
                  <div className="todo-wrapper__listTodo__item__content">
                    <h3 className="todo-wrapper__listTodo__item__content__task">
                      TASK NAME: {item.task}
                    </h3>
                    <p className="todo-wrapper__listTodo__item__content__description">
                      DESCRIPTION: {item.description}
                    </p>
                  </div>
                  <div className="todo-wrapper__listTodo__item__button">
                    <ButtonComponent
                      className="todo-wrapper__listTodo__item__button__btn-edit"
                      value="Edit"
                      onClick={() => hendleGetItemEdit(item.id)}
                    />
                    <ButtonComponent
                      className="todo-wrapper__listTodo__item__button__btn-remove"
                      value="Remove"
                      onClick={() => handleDeleteTodo(item.id)}
                    />
                  </div>
                </li>
              </ul>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ToDo;
