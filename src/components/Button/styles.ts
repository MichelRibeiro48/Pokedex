import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: auto;
  padding: 1rem 2rem;
  border-radius: 10px;
  background: cyan;
  font-weight: bold;
  cursor: pointer;

  &:not(:disabled):hover {
    filter: brightness(0.7);
  }
  &:active {
    transform: scale(0.9);
  }
  &:disabled {
    cursor: default;
  }
`;
