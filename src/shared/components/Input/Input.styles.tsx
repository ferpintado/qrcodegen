import styled from 'styled-components';
import { InputWrapperProps } from './Input.types';

export const InputWrapper = styled.div<InputWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  margin-bottom: ${({ noMargin }) => (noMargin ? '0' : '1rem')};
  text-align: left;

  input {
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
