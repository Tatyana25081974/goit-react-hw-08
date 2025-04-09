import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div className={styles.nav}>
      <NavLink to="/login" className={({ isActive }) => (isActive ? styles.active : styles.link)}>
        Увійти
      </NavLink>
      <NavLink to="/register" className={({ isActive }) => (isActive ? styles.active : styles.link)}>
        Реєстрація
      </NavLink>
    </div>
  );
}
