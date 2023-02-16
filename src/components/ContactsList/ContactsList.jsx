import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectContacts } from 'redux/contacts/contacts-selectors';
import { selectFilter } from 'redux/filter/filter-selectors';
import { ContactsListStyled } from './ContactsList.styled';
import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';
import {
  fetchContacts,
  deleteContact,
} from 'redux/contacts/contacts-operations';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  if (visibleContacts.length > 0) {
    return (
      <>
        <ContactsListStyled>
          {visibleContacts.map(({ id, name, number }) => {
            return (
              <ContactsListItem
                key={id}
                id={id}
                name={name}
                number={number}
                onDeleteButton={id => dispatch(deleteContact(id))}
              />
            );
          })}
        </ContactsListStyled>
      </>
    );
  }
};
