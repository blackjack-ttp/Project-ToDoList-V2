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
          <InputComponent
            title="Task Title"
            id="task_title"
            type="text"
            name="task_title"
            value={form.task_title}
            onChange={handleChange}
            placeholder="Enter title task"
          />
          <InputComponent
            title="Task Description"
            id="task_description"
            type="text"
            name="task_description"
            value={form.task_description}
            onChange={handleChange}
            placeholder="Enter description task"
          />
          <ButtonComponent value="Add todo" />
        </form>
        {state?.todos.map((item) => {
          return (
            <div className="todo-wrapper__listTodo">
              <ul key={item.id} className="todo-wrapper__listTodo__list">
                <li className="todo-wrapper__listTodo__list__item">
                  <div className="todo-wrapper__listTodo__list__item__content">
                    <h3>{item.task_title}</h3>
                    <p>{item.task_description}</p>
                  </div>
                  <div className="todo-wrapper__listTodo__list__item__icon"></div>
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
