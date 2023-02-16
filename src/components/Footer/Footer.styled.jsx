import styled from 'styled-components';

export const FooterStyled = styled.footer`
  width: 100%;
  padding: 12px 0px;
  margin-top: auto;
  background-color: #bfb3a8;
  box-shadow: 0px -2px 4px -1px rgba(0, 0, 0, 0.2),
    0px -4px 5px 0px rgba(0, 0, 0, 0.14), 0px -1px 10px 0px rgba(0, 0, 0, 0.12);

  @media screen and (min-width: 768px) {
    padding: 14px 0px;
  }

  @media screen and (max-width: 1200px) {
  }

  @media screen and (min-width: 1200px) {
  }
`;

export const FooterContentStyled = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 0px 4px;

  @media screen and (max-width: 767px) {
  }

  @media screen and (max-width: 1200px) {
  }

  @media screen and (min-width: 1200px) {
    padding: 0px 128px;
  }
`;

export const FooterTextStyled = styled.p`
  margin: 0;
  text-align: center;
  font-size: 12px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (max-width: 1200px) {
  }

  @media screen and (min-width: 1200px) {
  }
`;
