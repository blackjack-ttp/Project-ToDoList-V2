//* SCSS
import '@/styles/components/button/style.scss';

const ButtonComponent = ({ value }) => {
  return (
    <>
      <button className="btn">{value}</button>
    </>
  );
};

export default ButtonComponent;
