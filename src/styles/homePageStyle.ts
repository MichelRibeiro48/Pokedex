import styled from "styled-components";
import { pixelToRem } from "../utils/pixelToRem";

export const HomePageContainer = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomePageContent = styled.main`
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 22rem;
  text-align: center;
  gap: 1rem;

  .description {
    font-weight: bold;
  }

  .line {
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, red, yellow);
  }

  .attacks {
    display: flex;
    gap: 1rem;
  }

  .buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .pokemon {
    color: yellow;
    font-size: 2.5rem;
    font-weight: bold;
  }

  .title {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .types {
    display: flex;
    justify-content: space-between;
  }
  .types::before {
    content: "";
  }
`;

export const HomePageImgContainer = styled.figure`
  width: ${pixelToRem(250)};
  display: flex;
  flex-direction: column;
  align-items: center;
  &::after {
    content: "";
    width: ${pixelToRem(150)};
    height: ${pixelToRem(28)};
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 50%;
  }

  img {
    width: 100%;
  }
`;
