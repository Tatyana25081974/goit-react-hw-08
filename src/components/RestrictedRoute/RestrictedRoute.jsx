

import { Navigate } from 'react-router-dom';
// Імпортуємо Navigate — компонент для перенаправлення користувача

import { useSelector } from 'react-redux';
// Імпортуємо useSelector — щоб дістати дані зі стану Redux

import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
// Імпортуємо селектор, який повертає true/false, чи залогінений користувач

export default function RestrictedRoute({ element, redirectTo = '/contacts' }) {
// Створюємо компонент RestrictedRoute:
// Приймає 2 пропси:
// 1. element → який компонент потрібно показати (наприклад, LoginPage)
// 2. redirectTo → куди перекинути, якщо користувач залогінений (наприклад, на /contacts)

  const isLoggedIn = useSelector(selectIsLoggedIn);
  // Дістаємо зі стану Redux інформацію: залогінений користувач чи ні

  return isLoggedIn
    ? <Navigate to={redirectTo} />
    : element;
  // Якщо користувач залогінений → перекидаємо на redirectTo
  // Якщо НЕ залогінений → показуємо компонент (наприклад, LoginPage)
}
