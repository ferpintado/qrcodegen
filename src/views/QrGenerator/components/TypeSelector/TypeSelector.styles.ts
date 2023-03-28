import styled from 'styled-components';
import { TypeSelectorButtonProps } from './TypeSelector.types';

export const TypeSelectorContainer = styled.div`
  min-width: 300px;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const TypeSelectorButton = styled.button<TypeSelectorButtonProps>`
  width: 100%;
  background-color: ${(props) => (props.active ? '#1e6091' : '#fff')};
  border: 1px solid #bbb;
  padding: 10px;
  color: ${(props) => (props.active ? '#fff' : '#000')};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.active ? '#1e6091' : '#eee')};
  }

  &:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  &:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  &:nth-child(2) {
    border-left: none;
    border-right: none;
  }
`;
