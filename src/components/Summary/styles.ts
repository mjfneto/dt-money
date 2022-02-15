import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -6.5625rem;

  div {
    height: 8.5rem;
    padding: 1.5rem 2rem 0.5rem;
    border-radius: 0.3125rem;

    color: var(--text-title);
    background: var(--shape);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-bg {
      color: var(--shape);
      background: var(--green);
    }
  }
`;
