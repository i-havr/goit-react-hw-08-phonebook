import { Routes, Route } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshingCurrentUser } from 'redux/auth/auth-selectors';
import { refreshCurrentUser } from 'redux/auth/auth-operations';

import { PublicRoute } from 'components/AuthRouts/PublicRoute';
import { PrivateRoute } from 'components/AuthRouts/PrivateRoute';

import Layout from 'components/Layout/Layout';

const Home = lazy(() => import('pages/Home/Home'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LogInPage = lazy(() => import('pages/LogInPage/LogInPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshingCurrentUser = useSelector(selectIsRefreshingCurrentUser);

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshingCurrentUser && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<PublicRoute />}>
            <Route index element={<Home />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LogInPage />} />
          </Route>

          <Route path="" element={<PrivateRoute />}>
            <Route path="contacts" element={<ContactsPage />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    )
  );
}
