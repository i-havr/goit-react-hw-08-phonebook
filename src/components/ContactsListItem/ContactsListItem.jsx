import PropTypes from 'prop-types';
import { IoIosContact } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';
import { AiFillEdit } from 'react-icons/ai';
import { ButtonDelete } from 'components/Button/ButtonDelete';
import {
  ContactsListItemStyled,
  InnerElementStyled,
} from 'components/ContactsListItem/ContactsListItem.styled';

export const ContactsListItem = ({
  id,
  name,
  number,
  onEditButton,
  onDeleteButton,
}) => {
  return (
    <ContactsListItemStyled>
      <IoIosContact size={32} />
      <InnerElementStyled>
        <b>{`${name}`}</b>
        {`${number}`}
      </InnerElementStyled>
      <ButtonDelete actionHandler={() => onEditButton(id)}>
        <AiFillEdit size={16} /> <p>Edit</p>
      </ButtonDelete>
      <ButtonDelete actionHandler={() => onDeleteButton(id)}>
        <MdDelete size={16} />
        <p>Delete</p>
      </ButtonDelete>
    </ContactsListItemStyled>
  );
};

ContactsListItem.propTypes = {
  id: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.node.isRequired,
  onDeleteButton: PropTypes.func.isRequired,
};
