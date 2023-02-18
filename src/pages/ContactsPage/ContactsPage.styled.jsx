import styled from 'styled-components';

export const ContactsPageStyled = styled.main`
  display: block;
  width: 100%;
`;

export const SectionStyled = styled.section`
  display: block;
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  padding: 64px 0px;
`;

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  min-height: 100%;
  margin-left: auto;
  margin-right: auto;

  & > h1 {
    font-size: 22px;
    margin-bottom: 16px;
  }

  & > p {
    margin-bottom: 16px;
    font-size: 10px;
    font-style: italic;
  }

  @media screen and (min-width: 480px) {
    & > p {
      margin-bottom: 16px;
      font-size: 14px;
      font-style: italic;
    }
  }

  @media screen and (min-width: 768px) {
    & > h1 {
      font-size: 32px;
    }
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;

    & > p {
      margin-bottom: 32px;
    }
  }
`;

export const FormWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  min-width: 300px;
  margin: 0;

  @media screen and (min-width: 480px) {
    min-width: 400px;
  }

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    width: 800px;
  }
`;

export const FilterWrapperStyled = styled.div`
  width: 100%;

  & > ul {
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    width: 80%;
    border: 1px solid #729599;
    border-radius: 5px;
    padding: 8px 16px;
  }
`;
