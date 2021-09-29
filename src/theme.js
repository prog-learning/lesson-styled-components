import { css } from 'styled-components';

export const theme = {
  colors: {
    primary: '#00bcd4',
    secondary: '#ff9800',
    accent: '#ff5722',
    error: '#f44336',
    warning: '#ffeb3b',
    info: '#2196f3',
    success: '#4caf50',
  },
  fontSizes: {
    small: '12px',
    medium: '20px',
    large: '32px',
  },
  mixins: {
    flexCenter: css`
      display: flex;
      justify-content: center;
      align-items: center;
    `,
  },
  media: {
    sp: (first, ...interpolations) => css`
      @media (max-width: 768px) {
        ${css(first, ...interpolations)}
      }
    `,
  },
};
