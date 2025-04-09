import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <div className={styles.nav}>
      <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : styles.link)}>
        Головна
      </NavLink>
      <NavLink to="/contacts" className={({ isActive }) => (isActive ? styles.active : styles.link)}>
        Контакти
      </NavLink>
    </div>
  );
}
