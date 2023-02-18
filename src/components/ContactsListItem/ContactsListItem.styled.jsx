import styled from 'styled-components';

export const ContactsListItemStyled = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
 
  max-width: 100%
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  
  color: #729599;

  &:not(:last-child){
  border-bottom: 1px solid #BCC5CE;
  }

  & > svg{
    margin: 0;
    padding: 0;
margin-right: 8px;
  }

  & > button{
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;

  &:not(:last-child){
  margin-right: 4px;
  }

    &:hover{
    max-width: 100px;
    padding: 8px;
    }

    &>svg{
      opacity: 1;
    }
    & > p {
      transition: all 0.3s ease;
      display: none;
      opacity: 0;
    }



    

    &:hover svg {
        display: none;
        opacity: 0;
    }
    &:hover p {
        display: inline;
        opacity: 1;
    }

  
  }
`;

export const InnerElementStyled = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  color: black;
  margin-right: auto;
  font-size: 14px;
`;
