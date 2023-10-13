//* SCSS
import '@/styles/components/button/style.scss';

const ButtonComponent = ({ value, onClick }) => {
  return (
    <>
      <button className="btn" onClick={onClick}>
        {value}
      </button>
    </>
  );
};

export default ButtonComponent;
