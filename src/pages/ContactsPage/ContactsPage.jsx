import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { notifyError } from 'components/Notify/NotifyError';
import {
  selectLoadingStatus,
  selectError,
} from 'redux/contacts/contacts-selectors';
import { Toaster } from 'react-hot-toast';
import {
  ContactsPageStyled,
  ContainerStyled,
  SectionStyled,
  FormWrapperStyled,
  FilterWrapperStyled,
} from './ContactsPage.styled';
import ContactForm from 'components/ContactForm.jsx/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { ModalEdit } from 'components/ModalEdit/ModalEdit';
import { selectIsModalOpen } from 'redux/modal/modal-selectors';

export default function ContactsPage() {
  const isLoading = useSelector(selectLoadingStatus);
  const error = useSelector(selectError);
  const isModalOpen = useSelector(selectIsModalOpen);

  useEffect(() => {
    error && notifyError(error);
  }, [error]);

  if (isModalOpen) {
    document.body.classList.add('modal-open');
  } else {
    document.body.classList.remove('modal-open');
  }

  return (
    <>
      {isModalOpen && <ModalEdit />}
      <ContactsPageStyled>
        <SectionStyled>
          <ContainerStyled>
            <h1>This is Your Phonebook</h1>
            <p>You can add, edit and delete your contacts!</p>
            <FormWrapperStyled>
              <ContactForm />
              <FilterWrapperStyled>
                <Filter />
                <ContactsList />
                {isLoading && <Loader />}
              </FilterWrapperStyled>
            </FormWrapperStyled>
            <Toaster />
          </ContainerStyled>
        </SectionStyled>
      </ContactsPageStyled>
    </>
  );
}
