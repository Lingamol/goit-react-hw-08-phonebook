import styled from '@emotion/styled';
export const List = styled.ul`
  width: 600px;
  border: 2px solid blue;
  margin-right: auto;
  margin-left: auto;
  padding: 25px;
  text-align: left;
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;
export const ListItemText = styled.span`
  &:not(:last-child) {
    margin-right: 15px;
    width: 150px;
  }
`;
export const ListItemBtn = styled.button`
  width: 60px;
  padding: 2px;
  border-radius: 5px;
  background-color: #e0626e;
`;
