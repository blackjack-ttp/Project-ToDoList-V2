//* SCSS
import '@/styles/components/input/style.scss';

const Input = ({ value, type, placeholder }) => {
  return (
    <>
      <span className="title">{value}</span>
      <input className="input" type={type} placeholder={placeholder} />
    </>
  );
};

export default Input;
