import styled from 'styled-components';

export const ImageWrapperStyled = styled.div`
  position: relative;
  max-width: 300px;
  margin-bottom: 32px;
  padding: 16px;

  border-bottom: 1px solid #729599;

  @media screen and (min-width: 768px) {
    max-width: 400px;
  }

  @media screen and (min-width: 1200px) {
    margin-bottom: 16px;
    padding-bottom: 32px;
  }
`;

export const TextStyled = styled.p`
  position: absolute;
  left: 10%;
  bottom: 12%;
  margin: 0;
  color: #7a7067;
  font-size: 14px;
  font-style: italic;

  @media screen and (min-width: 1200px) {
    left: 5%;
    bottom: 10%;
    font-size: 18px;
  }
`;

export const ImageHeroStyled = styled.div``;
