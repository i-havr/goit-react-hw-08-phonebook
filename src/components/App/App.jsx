import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshingCurrentUser,
} from 'redux/auth/auth-selectors';
import { refreshCurrentUser } from 'redux/auth/auth-operations';

import Layout from 'components/Layout/Layout';
import Home from 'pages/Home/Home';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LogInPage from 'pages/LogInPage/LogInPage';
import { ContactsPage } from 'pages/ContactsPage/ContactsPage';
import NotFound from 'pages/NotFound/NotFound';

export default function App() {
  const IsLoggedIn = useSelector(selectIsLoggedIn);

  const isRefreshingCurrentUser = useSelector(selectIsRefreshingCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshingCurrentUser && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={IsLoggedIn ? <Navigate to="/contacts" /> : <Home />}
          />
          <Route
            path="register"
            element={
              IsLoggedIn ? <Navigate to="/contacts" /> : <RegisterPage />
            }
          />
          <Route
            path="login"
            element={IsLoggedIn ? <Navigate to="/contacts" /> : <LogInPage />}
          />
          <Route
            path="contacts"
            element={IsLoggedIn ? <ContactsPage /> : <Navigate to="/" />}
          />
          {/* <Route path="contacts" element={<ContactsPage />} /> */}

          {/* <PrivateRoute path="contacts">
          <ContactsPage />
        </PrivateRoute> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    )
  );
}
