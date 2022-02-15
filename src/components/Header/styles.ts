import styled from 'styled-components';

export const Container = styled.header`
  height: 212px;
  background: var(--blue);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;

  button {
    width: 12rem;
    height: 3rem;
    border: none;
    border-radius: 0.3125rem;

    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 600;
    color: var(--shape);
    background: var(--blue-light);

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
