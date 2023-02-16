import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const UserMenuStyled = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;

  & > p {
    margin-left: 4px;
    margin-right: 8px;
    font-size: 12px;
    font-weight: bold;
  }

  & > svg {
    width: 24px;
    height: 24px;
  }

  & > button {
    min-width: 0;
    padding-left: 2px;
    padding-right: 2px;
    font-size: 8px;
  }

  @media screen and (min-width: 480px) {
    & > p {
      margin-left: 4px;
      margin-right: 8px;
      font-weight: bold;
    }
    & > svg {
      width: 24px;
      height: 24px;
    }

    & > button {
      min-width: 0;
      padding-left: 4px;
      padding-right: 4px;
      font-size: 12px;
    }
  }

  @media screen and (min-width: 768px) {
    & > p {
      margin-left: 4px;
      margin-right: 16px;
      font-weight: bold;
      font-size: 16px;
    }
    & > svg {
      width: 32px;
      height: 32px;
    }

    & > button {
      min-width: 0;
      padding-left: 8px;
      padding-right: 8px;
      font-size: 16px;
    }
  }

  @media screen and (min-width: 1200px) {
    & > p {
      margin-left: 4px;
      margin-right: 16px;
      font-weight: bold;
    }

    & > button {
      min-width: 0;
      padding-left: 8px;
      padding-right: 8px;
    }
  }
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 6px 8px;
  text-decoration: none;
  font-weight: bold;
  color: #252f38;
  &:not(:last-child) {
    margin-right: 8px;
  }
  &.active {
    color: #e6dfd9;
    outline: 2px solid #e6dfd9;
    /* border: 1px solid #e6dfd9; */
    border-radius: 4px;
    text-decoration: none;
  }
  &:hover,
  &:focus {
    color: #e6dfd9;
  }
`;
