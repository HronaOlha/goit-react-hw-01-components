import styled from '@emotion/styled';

export const Statistic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  background-color: white;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Title = styled.h2`
  padding: 30px 0;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% / 5);
  padding: 8px 8px;
`;
