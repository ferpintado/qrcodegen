import styled from 'styled-components';

export const Label = styled.label`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const AddButton = styled.button`
  padding: 5px 10px;
  font-size: 0.8rem;
  color: #184e77;
  border: 1px solid #184e77;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 0.5rem;
`;

export const RemoveButton = styled(AddButton)`
  color: red;
  border: 1px solid red;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  width: 100%;
  align-items: left;
`;

export const Error = styled.span`
  color: red;
  font-size: 0.8rem;
  margin-top: 0.2rem;
  text-align: left;
  width: 100%;
`;
