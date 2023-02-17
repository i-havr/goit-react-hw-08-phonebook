import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeStyled = styled.main`
  display: block;
  width: 100%;
  padding: 32px 0px;
`;

export const SectionStyled = styled.section`
  @media screen and (min-width: 768px) {
  }

  @media screen and (max-width: 1200px) {
  }

  @media screen and (min-width: 1200px) {
    max-width: 1600px;
    padding: 64px 0px 32px 0px;
  }
`;

export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 80%;
  min-height: 100%;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }

  & div[data-testid] {
    margin-top: 0px;
    margin-bottom: -64px;
  }
`;

export const TextWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* padding-left: 16px;
  padding-right: 16px; */
  font-size: 14px;

  & > p:not(:last-child) {
    margin-bottom: 16px;
  }

  @media screen and (max-width: 767px) {
    /* margin-bottom: 30px; */
  }

  @media screen and (max-width: 1200px) {
    /* padding-top: 60px;
    padding-bottom: 60px; */
  }

  @media screen and (min-width: 1200px) {
    flex-direction: row;

    & > p:not(:last-child) {
      margin-bottom: 0;
      margin-right: 96px;
    }
  }
`;

export const LinkStyled = styled(Link)`
  /* font-weight: bold; */
  color: #729599;
`;
