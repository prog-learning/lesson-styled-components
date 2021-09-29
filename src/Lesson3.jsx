import React from 'react';
import styled from 'styled-components';

/* スタイル付きComponentにpropsを渡したスタイリング方法 */
export const Lesson3 = () => {
  return (
    <StyledComponent color='blue' isBold={true}>
      <h1>Lesson 3</h1>
      <h2>スタイル付きComponentにpropsを渡したスタイリング方法</h2>
      <p className='text'>This is a simple example of a styled component.</p>
      <StyledButton>
        <StyledButtonText>Click me!</StyledButtonText>
      </StyledButton>
    </StyledComponent>
  );
};

const StyledComponent = styled.div`
  padding: 24px;
  background-color: #eee;
  border-bottom: 1px solid #444;
  .text {
    /* Componentで受け取った値がpropsに入っている */
    color: ${(props) => props.color};
    /* 分割代入で書くことも可能 */
    font-weight: ${({ isBold }) => (isBold ? 'bold' : 'normal')};
  }
`;

const StyledButton = styled.button`
  background-color: limegreen;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  &:hover {
    filter: brightness(0.8);
  }
`;

const StyledButtonText = styled.span`
  color: white;
`;
