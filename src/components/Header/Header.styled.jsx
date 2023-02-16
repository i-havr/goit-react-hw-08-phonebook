import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderStyled = styled.header`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 8px 0px;
  background-color: #729599;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  @media screen and (min-width: 768px) {
    padding: 16px 0px;
  }

  @media screen and (max-width: 1200px) {
  }

  @media screen and (min-width: 1200px) {
  }
`;

export const HeaderContentStyled = styled.div`
  width: calc(100% - 16px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 480px) {
    width: calc(100% - 128px);
  }

  @media screen and (min-width: 768px) {
    width: calc(100% - 256px);
  }

  @media screen and (min-width: 1200px) {
    padding-left: 128px;
    padding-right: 128px;
  }
`;

export const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  color: #252f38;
  font-size: 14px;
  text-decoration: none;

  & > svg {
    margin: 0px;
    margin-right: 0px;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    & > svg {
      margin: 0px;
      margin-right: 4px;
    }
  }

  @media screen and (max-width: 1200px) {
  }

  @media screen and (min-width: 1200px) {
    margin: 0 64px 0 0;
    font-size: 20px;
  }
`;
