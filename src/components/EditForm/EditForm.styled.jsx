import styled from 'styled-components';

export const EditFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto 0 auto;
  border: 1px solid #729599;
  border-radius: 5px;
  padding: 8px 16px 8px 16px;
`;

export const LabelInputStyled = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #252f38;
  & > input {
    border: 1px solid black;
    border-radius: 3px;
    padding: 4px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
