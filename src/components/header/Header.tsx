import React from 'react';
import cls from '../../styles/components/header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={cls.header}>
      <div className="container">
        <div className={cls.header__promo}>
          <h1>WBC</h1>

          <nav className={cls.header__menu}>
            <ul>
              <li>
                <Link to="">ShopApp</Link>
              </li>
              <li>
                <Link to="">TodoApp</Link>
              </li>
              <li>
                <Link to="">WeatherApp</Link>
              </li>
            </ul>
          </nav>

          <button className={cls.header__logout}>Logout</button>

          <button className={cls.header__burger}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
