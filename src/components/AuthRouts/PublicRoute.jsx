import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
// import {  useLocation } from 'react-router-dom';

import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

export const PublicRoute = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  //   const location = useLocation();

  return isLoggedIn ? <Navigate to={'/contacts'} replace /> : <Outlet />;

  // Якби юзер залогінився після переходу з якоїсь сторінки і треба
  // його повернути назад після авторизації

  //   return token ? (
  //     <Navigate to={location?.state?.from ?? '/'} replace />
  //   ) : (
  //     <Outlet />
  //   );

  // Для цього у посиланні на тій сторінці необхідно вказати state, наприклад
  //          <Link
  //           to={`${post.id}`}
  //           state={{ from: location }}
  //          >
};
