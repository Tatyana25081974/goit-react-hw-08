import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectIsRefreshing } from '../../redux/auth/authSelectors';
import { refreshUser } from '../../redux/auth/authOps';

import Layout from '../../Layout/Layout';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute';

import HomePage from '../../pages/HomePage/HomePage';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import ContactsPage from '../../pages/ContactsPage/ContactsPage';
import Loader from '../Loader/Loader'; 

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    isRefreshing ? (
       <Loader />
    ) : (
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Головна сторінка */}
          <Route index element={<HomePage />} />

          {/* Реєстрація */}
          <Route
            path="/register"
            element={
              <RestrictedRoute
                element={<RegisterPage />}
                redirectTo="/contacts"
              />
            }
          />

          {/* Логін */}
          <Route
            path="/login"
            element={
              <RestrictedRoute
                element={<LoginPage />}
                redirectTo="/contacts"
              />
            }
          />

          {/* Контакти */}
          <Route
            path="/contacts"
            element={
              <PrivateRoute
                element={<ContactsPage />}
                redirectTo="/login"
              />
            }
          />
        </Route>
      </Routes>
    )
  );
}

