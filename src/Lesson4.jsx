import React from 'react';
import styled from 'styled-components';

/* themeを使ってstyleを呼び出す*/
export const Lesson4 = () => {
  return (
    <StyledComponent>
      <h1>Lesson 4</h1>
      <h2>themeを使ってstyleを呼び出す</h2>
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
    /* どこでもこのようにthemeが使える */
    color: ${({ theme }) => theme.colors.primary};
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
