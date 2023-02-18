import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/contacts/contacts-selectors';
import { addContact } from 'redux/contacts/contacts-operations';
import { Button } from 'components/Button/Button';
import {
  ContactFormStyled,
  LabelInputStyled,
} from 'components/ContactForm.jsx/ContactForm.styled';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setPhone] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setPhone(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newContact = { name, number };

    if (contacts?.some(contact => contact.name === name)) {
      return alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContact(newContact));
      resetForm();
    }
  };

  const resetForm = () => {
    setName('');
    setPhone('');
  };

  return (
    <ContactFormStyled onSubmit={handleSubmit}>
      <LabelInputStyled>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </LabelInputStyled>

      <LabelInputStyled>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </LabelInputStyled>
      <Button>Add</Button>
    </ContactFormStyled>
  );
}
