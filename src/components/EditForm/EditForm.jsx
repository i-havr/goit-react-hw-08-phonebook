import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contacts-selectors';
import { selectId } from 'redux/modal/modal-selectors';
import { setModal } from 'redux/modal/modal-slice';
import { editContact } from 'redux/contacts/contacts-operations';
import {
  EditFormStyled,
  LabelInputStyled,
  ButtonsWrapper,
} from './EditForm.styled';
import { Button } from 'components/Button/Button';

export const EditForm = () => {
  const dispatch = useDispatch();
  const [changedName, setChangedName] = useState('');
  const [changedNumber, setChangedNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const contactId = useSelector(selectId);

  useEffect(() => {
    if (!contacts) {
      return;
    }
    const contactInformation = contacts.find(({ id }) => id === contactId);
    const { name, number } = contactInformation;
    setChangedName(name);
    setChangedNumber(number);
  }, [contactId, contacts]);

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setChangedName(value);
        break;

      case 'number':
        setChangedNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (
      contacts.some(
        contact =>
          contact.id === contactId &&
          contact.name === changedName &&
          contact.number === changedNumber
      )
    ) {
      return alert(`You haven't made any changes!`);
    } else if (
      contacts.some(
        contact => contact.id !== contactId && contact.name === changedName
      )
    ) {
      return alert(`${changedName} is already in contacts.`);
    } else {
      dispatch(
        editContact({
          id: contactId,
          contact: { name: changedName, number: changedNumber },
        })
      );
      dispatch(setModal());
    }
  };

  return (
    <EditFormStyled autoComplete="off" onSubmit={handleSubmit}>
      <LabelInputStyled>
        Name
        <input
          type="text"
          name="name"
          value={changedName}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          autoFocus
        />
      </LabelInputStyled>

      <LabelInputStyled>
        Number
        <input
          type="tel"
          name="number"
          value={changedNumber}
          onChange={handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </LabelInputStyled>
      <ButtonsWrapper>
        <Button>Save changes</Button>
        <Button type="button" actionHandler={() => dispatch(setModal())}>
          Cancel
        </Button>
      </ButtonsWrapper>
    </EditFormStyled>
  );
};
