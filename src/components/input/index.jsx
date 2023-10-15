const Input = ({ className, id, value, name, type, placeholder, onChange, autoFocus }) => {
  return (
    <>
      <input
        className={className}
        id={id}
        type={type}
        name={name}
        value={value}
        autoFocus={autoFocus}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
