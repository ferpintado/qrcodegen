import styled from 'styled-components';

export const QrGeneratorContainer = styled.div`
  align-items: center;
  background: #fff;
  border-radius: 10px;
  border: 1px solid #bbb;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  padding: 20px;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;

  & > * {
    flex: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;
