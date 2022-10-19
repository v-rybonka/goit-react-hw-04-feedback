import styled from 'styled-components';

export const FeedBackList = styled.ul`
  display: flex;

  list-style: none;
`;
export const FeedBackItem = styled.li`
  &:not(:last-child) {
    margin-right: 15px;
  }
`;
export const FeedBackBtn = styled.button`
  cursor: pointer;
  &:hover,
  :focus {
    background-color: #87cefa;
  }
  font-weight: 700;
  border: 1px solid #87ceeb;
  border-radius: 4px;
  padding: 10px;
`;
