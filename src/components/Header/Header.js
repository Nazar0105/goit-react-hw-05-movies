import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'; // Імпортуємо стилі

function Header() {
  return (
    <header className={styles.header}> {/* Використовуємо стилі для елемента */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
