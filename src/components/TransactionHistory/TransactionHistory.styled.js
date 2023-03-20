import styled from '@emotion/styled';

export const Table = styled.table`
  width: 100%;
  margin-bottom: 20px;

  background-color: #fff;
  border-radius: 4px;
`;

export const Titles = styled.th`
  padding: 20px 0;
  color: white;
  background-color: #34ebcf;
`;

export const Row = styled.tr`
  &:nth-child(odd) {
    background-color: #d3d2d2;
  }
`;
