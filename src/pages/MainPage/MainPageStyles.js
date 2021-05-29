import styled, { css } from "styled-components";
import { colors } from "styles";

export const DefaultWrapping = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  & p {
    width: 210px;
    font-size: 22px;
    color: ${colors.GRAY};
  }
  & svg {
    margin-bottom: 30px;
  }
`;

export const StyledMainPage = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${colors.LIGHT_GRAY};

  @media (max-width: 640px), (max-height: 460px) {
    min-height: 100vh;
    height: 100%;
  }
`;

export const Wrapper = styled.div`
  height: calc(100% - 72px);
  display: flex;

  @media (max-width: 640px), (max-height: 460px) {
    flex-direction: column;
  }
`;

export const LoadingWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(128, 128, 128, 0.4);
`;

export const Loading = styled.div`
  position: absolute;
  z-index: 10;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: 245px;
  border-top: 10px solid ${colors.PRIMARY};
  border-radius: 50%;
  width: 200px;
  height: 200px;
  animation: spin 1.25s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-height: 640px) {
    margin-top: 200px;
  }

  @media (max-height: 440px) {
    margin-top: 120px;
  }
`;

export const NotFound = styled.div`
  ${DefaultWrapping}

  & svg {
    width: 64px;
    height: 75px;
  }
`;

export const InitialState = styled.div`
  ${DefaultWrapping}

  & svg {
    width: 64px;
    height: 64px;
  }
`;

export const Error = styled.div`
  ${DefaultWrapping}

  & p {
    width: 80%;
  }

  & svg {
    width: 100px;
    height: 100px;
  }
`;

export const NoRepos = styled.div`
  ${DefaultWrapping}

  & p {
    width: 100%;
  }
`;
