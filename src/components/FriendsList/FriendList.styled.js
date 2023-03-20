import styled from '@emotion/styled';

export const OnlineStatus = styled.span`
  border-radius: 50%;
  display: inline-block;
  height: 10px;
  width: 10px;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')}
  }};
`;
