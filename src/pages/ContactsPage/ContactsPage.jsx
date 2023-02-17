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

export default function ContactsPage() {
  const isLoading = useSelector(selectLoadingStatus);
  const error = useSelector(selectError);

  useEffect(() => {
    error && notifyError(error);
  }, [error]);
  return (
    <ContactsPageStyled>
      <SectionStyled>
        <ContainerStyled>
          <h1>This is Your Phonebook</h1>
          <p>You can add, delete and search contacts. Just try!</p>
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
  );
}
