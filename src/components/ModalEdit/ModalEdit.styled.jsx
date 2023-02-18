import styled from 'styled-components';

export const BackdropStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
`;

export const ModalStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  width: 270px;
  padding: 16px;
  background-color: #e6dfd9;
  border-radius: 5px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  transform: translate(-50%, -50%) scale(1);

  @media screen and (min-width: 480px) {
    padding: 32px;
    width: 350px;
  }
`;
