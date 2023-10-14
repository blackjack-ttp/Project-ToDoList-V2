const Input = ({ className, id, value, name, type, placeholder, onChange }) => {
  return (
    <>
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
