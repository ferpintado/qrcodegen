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
