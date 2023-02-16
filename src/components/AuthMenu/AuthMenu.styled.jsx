import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthMenuStyled = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 6px 8px;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
  color: #252f38;
  &:not(:last-child) {
    margin-right: 4px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 1200px) {
    /* padding-top: 60px;
    padding-bottom: 60px; */
  }

  @media screen and (min-width: 1200px) {
    &:not(:last-child) {
      margin-right: 8px;
    }
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
