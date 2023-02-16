import { AuthMenuStyled, NavLinkStyled } from './AuthMenu.styled';

export const AuthMenu = () => {
  return (
    <AuthMenuStyled>
      <NavLinkStyled to={'register'}>Register</NavLinkStyled>
      <NavLinkStyled to={'login'}>Log in</NavLinkStyled>
    </AuthMenuStyled>
  );
};
