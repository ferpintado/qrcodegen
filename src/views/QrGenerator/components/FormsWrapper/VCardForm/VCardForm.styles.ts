import styled from 'styled-components';

export const ColumnGrid = styled.div<{ gridTemplateColumns?: string }>`
  display: grid;
  grid-template-columns: ${({ gridTemplateColumns }) =>
    gridTemplateColumns || '1fr 1fr'};
  grid-gap: 20px;
  text-align: left;
`;
