import React from 'react';
import cls from '../../styles/components/footer.module.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={cls.footer}>
      <div className="container">
        <ul className={cls.footer__content}>
          <li>Telegram: @SulaimanAsh</li>
          <li>
            Linkedin:
            <Link to="https://www.linkedin.com/in/sulaiman-ashimzhanov-a4b598261/">
              https://www.linkedin.com/in/sulaiman-ashimzhanov-a4b598261/
            </Link>
          </li>
          <li>
            GitHub:
            <Link to="https://github.com/SulaimanAshimzhanov">
              https://github.com/SulaimanAshimzhanov
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
