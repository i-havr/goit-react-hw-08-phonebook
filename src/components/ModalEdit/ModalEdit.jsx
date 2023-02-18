import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { setModal } from 'redux/modal/modal-slice';
import { EditForm } from 'components/EditForm/EditForm';
import { BackdropStyled, ModalStyled } from './ModalEdit.styled';

export const ModalEdit = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeydown = event => {
      event.code === 'Escape' && dispatch(setModal());
    };
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [dispatch]);

  const handleBackdropClick = event => {
    event.currentTarget === event.target && dispatch(setModal());
  };

  return createPortal(
    <BackdropStyled onClick={handleBackdropClick}>
      <ModalStyled>
        <EditForm />
      </ModalStyled>
    </BackdropStyled>,
    document.querySelector('#modal-root')
  );
};
