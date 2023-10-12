//* IMPORT
import { Link } from 'react-router-dom';
//* DATA
import data from './dataLink';
//* SCSS
import '@/styles/components/navbar/style.scss';

const Navbar = () => {
  return (
    <>
      <div className="navbar-wrapper">
        <ul className="navbar-wrapper__menu">
          {data.map((item, i) => (
            <li className="navbar-wrapper__menu__item" key={i}>
              <Link to={item.to} className="navbar-wrapper__menu__item__link">
                {item.lable}
              </Link>
              {item.children && (
                <ul className="menu-children">
                  {item.children.map((chil, j) => (
                    <li key={j} className="menu-children__item">
                      <Link to={chil.to} className="menu-children__item__link">
                        {chil.lable}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
