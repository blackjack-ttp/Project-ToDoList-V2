const ButtonComponent = ({ className, value, onClick }) => {
  return (
    <>
      <button className={className} onClick={onClick}>
        {value}
      </button>
    </>
  );
};

export default ButtonComponent;
