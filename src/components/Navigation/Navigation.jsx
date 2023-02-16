import { useSelector } from 'react-redux';
import { NavigationStyled } from './Navigation.styled';
import { AuthMenu } from 'components/AuthMenu/AuthMenu';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <NavigationStyled>
      {isLoggedIn ? <UserMenu /> : <AuthMenu />}
    </NavigationStyled>
  );
};
