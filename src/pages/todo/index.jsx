//* IMPORT
import { ButtonComponent, InputComponent } from '@/imports/component';
//* SCSS
import '@/styles/pages/todo/style.scss';

const ToDo = () => {
  return (
    <>
      <div className="todo-wrapper">
        <InputComponent value="Task" type="text" placeholder="Enter title task" />
        <InputComponent value="Description" type="text" placeholder="Enter description task" />
        <ButtonComponent value="Add todo" />
      </div>
    </>
  );
};

export default ToDo;
