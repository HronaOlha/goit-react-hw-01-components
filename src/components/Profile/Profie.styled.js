import styled from '@emotion/styled';

export const UserProfile = styled.div`
  background-color: white;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-top: 20px;
  margin-bottom: 20px;

  padding-top: 20px;
  width: 300px;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  flex-direction: column;
  padding: 20px 0;
  color: #8d8d8d;
`;

export const Avatar = styled.img`
  height: 200px;
  border-radius: 50%;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
`;

export const Username = styled.p`
  font-weight: 700;
  color: #000000;
`;

export const Stats = styled.ul`
  display: flex;
  flex-direction: row;

  background-color: #e0e0e0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% / 3);
  padding: 8px 8px;
  border: 1px solid #8d8d8d;
`;

export const Number = styled.p`
  font-weight: 700;
`;
