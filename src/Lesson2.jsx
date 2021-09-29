import React from 'react';
import styled from 'styled-components';

/* styleの継承 */
export const Lesson2 = () => {
  return (
    <StyledComponent>
      <h1>Lesson 2</h1>
      <h2>styleの継承</h2>
      <p className='text'>This is a simple example of a styled component.</p>
      <ExpandedStyledButton>
        <ExpandedStyledButtonText>Click me!</ExpandedStyledButtonText>
      </ExpandedStyledButton>
    </StyledComponent>
  );
};

const StyledComponent = styled.div`
  padding: 24px;
  background-color: #eee;
  border-bottom: 1px solid #444;
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

/* 継承してstyleを上書きできる書き方 */
const ExpandedStyledButton = styled(StyledButton)`
  background-color: blue;
  font-size: 16px;
  &:hover {
    filter: none;
    background-color: darkblue;
  }
`;

const StyledButtonText = styled.span`
  color: white;
`;

const ExpandedStyledButtonText = styled(StyledButtonText)`
  color: pink;
`;
