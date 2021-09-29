import React from 'react';
import styled from 'styled-components';

/* 基本的な使用方法 */
export const Lesson1 = () => {
  return (
    <StyledComponent>
      <h1>Lesson 1</h1>
      <h2>基本的な使い方</h2>
      <p className='text'>This is a simple example of a styled component.</p>
      <StyledButton>
        <StyledButtonText>Click me!</StyledButtonText>
      </StyledButton>
    </StyledComponent>
  );
};

/* スタイル付きのComponentを作成 */
const StyledComponent = styled.div`
  /* このComponentの中だけに適応されるCSS */
  padding: 24px;
  background-color: #eee;
  border-bottom: 1px solid #444;
  h1 {
    letter-spacing: 8px;
  }
  /* Sassのように書ける */
  h2 {
    &:before {
      content: '🔰';
      margin-right: 8px;
    }
  }
  .text {
    color: tomato;
  }
`;

/* 一般的な使い方 */
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
