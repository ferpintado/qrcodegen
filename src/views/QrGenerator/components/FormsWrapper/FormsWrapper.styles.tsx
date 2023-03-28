import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 300px;
`;

export const GenerateButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #184e77;
  color: #fff;
  border: none;
  border-radius: 4px;
  margin-top: 1rem;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: #184e77;
    opacity: 0.8;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const Label = styled.label`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const InputWrapper = styled.div<{ noMargin?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  margin-bottom: ${({ noMargin }) => (noMargin ? '0' : '1rem')};

  input,
  select {
    margin-top: 0.5rem;
    padding: 0.5rem;
    width: 100%;
    box-sizing: border-box;

    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

export const Error = styled.span`
  color: red;
  font-size: 0.8rem;
  margin-top: 0.5rem;
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
