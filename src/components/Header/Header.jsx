import { HeaderStyled, HeaderContentStyled, LinkStyled } from './Header.styled';
import { Navigation } from 'components/Navigation/Navigation';

import { IconContext } from 'react-icons';
import { TiContacts } from 'react-icons/ti';

export const Header = () => {
  return (
    <HeaderStyled>
      <HeaderContentStyled>
        <LinkStyled to={'/'}>
          <IconContext.Provider value={{ color: '#252F38' }}>
            <TiContacts size={32} />
          </IconContext.Provider>
          <b>YourPhonebook</b>
        </LinkStyled>
        <Navigation />
      </HeaderContentStyled>
    </HeaderStyled>
  );
};
