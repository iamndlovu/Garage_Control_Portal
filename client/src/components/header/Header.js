import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';

import headerStyles from './Header.module.scss';

const Header = ({ user, handler }) => {
  //menu state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={headerStyles.Header}>
      <div
        className={`${headerStyles.menuButton} ${
          isMenuOpen && headerStyles.open
        }`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className={headerStyles.buttonLine}></div>
        <div className={headerStyles.buttonLine}></div>
        <div className={headerStyles.buttonLine}></div>
      </div>
      <nav>
        <div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className={headerStyles.navLink}
          >
            <span className={headerStyles.Elephant}>Garage</span>{' '}
            <span className={headerStyles.AvantGarde}>Control</span>
          </button>
        </div>
        {user && (
          <ul className={`${isMenuOpen && headerStyles.open}`}>
            <li>
              <button
                onClick={() => setIsMenuOpen(false)}
                className={`${headerStyles.navLink} ${({ isActive }) =>
                  isActive && headerStyles.active}`}
              >
                Dashboard
              </button>
            </li>
            <li>
              <button
                onClick={() => handler(null)}
                className={`${headerStyles.navLink} ${({ isActive }) =>
                  isActive && headerStyles.active}`}
              >
                Log Out
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
