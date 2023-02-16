import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { selectUserEmail } from 'redux/auth/auth-selectors';
import { UserMenuStyled } from './UserMenu.styled';
import { Button } from 'components/Button/Button';
import { IoIosContact } from 'react-icons/io';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectUserEmail);

  return (
    <UserMenuStyled>
      <IoIosContact />
      <p>{email}</p>
      <Button type="button" actionHandler={() => dispatch(logOut())}>
        Logout
      </Button>
    </UserMenuStyled>
  );
};
