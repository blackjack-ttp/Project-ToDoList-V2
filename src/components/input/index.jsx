//* SCSS
import '@/styles/components/input/style.scss';

const Input = ({ title, id, value, name, type, placeholder, onChange }) => {
  return (
    <>
      <span className="title">{title}</span>
      <input
        className="input"
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
