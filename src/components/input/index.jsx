const Input = ({ className, title, id, value, name, type, placeholder, onChange }) => {
  return (
    <>
      <span className={title}>{title}</span>
      <input
        className={className}
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
