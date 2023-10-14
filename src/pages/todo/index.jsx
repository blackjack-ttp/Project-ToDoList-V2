//* LIB
import { useReducer, useState } from 'react';
//* IMPORT
import { ButtonComponent, InputComponent } from '@/imports/component';

//* STORE
import todoReducer, { initState } from '@/store/reducer';
import { addTodoAction, removeItemTodoAction } from '@/store/action';

//* SCSS
import '@/styles/pages/todo/style.scss';

const ToDo = () => {
  const [form, setForm] = useState({
    task_title: '',
    task_description: '',
  });

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

  const handleDeleteTodo = (id) => {
    dispatch(removeItemTodoAction(id));
  };

  const handleClearInput = () => {
    setForm({
      task_title: '',
      task_description: '',
    });
  };
  return (
    <>
      <div className="todo-wrapper">
        <form onSubmit={handleAddTodo} className="todo-wrapper__input">
          <div className="todo-wrapper__input__title">
            <InputComponent
              title="Task Title"
              id="task_title"
              type="text"
              name="task_title"
              value={form.task_title}
              onChange={handleChange}
              placeholder="Enter title task"
            />
          </div>
          <div className="todo-wrapper__input__description">
            <InputComponent
              title="Task Description"
              id="task_description"
              type="text"
              name="task_description"
              value={form.task_description}
              onChange={handleChange}
              placeholder="Enter description task"
            />
          </div>
          <ButtonComponent className="todo-wrapper__input__btn-add" value="Add" />
        </form>
        {state?.todos.map((item) => {
          return (
            <div className="todo-wrapper__listTodo">
              <ul className="todo-wrapper__listTodo__list">
                <li key={item.id} className="todo-wrapper__listTodo__list__item">
                  <div className="todo-wrapper__listTodo__list__item__content">
                    <h3 className="todo-wrapper__listTodo__list__item__content__task">
                      {item.task}
                    </h3>
                    <p className="todo-wrapper__listTodo__list__item__content__discription">
                      {item.description}
                    </p>
                  </div>
                  <div className="todo-wrapper__listTodo__list__item__button">
                    <ButtonComponent
                      className="todo-wrapper__listTodo__list__item__button__btn-edit"
                      value="Edit"
                    />
                    <ButtonComponent
                      className="todo-wrapper__listTodo__list__item__button__btn-remove"
                      value="Remove"
                      onClick={() => handleDeleteTodo(item.id)}
                    />
                  </div>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ToDo;
