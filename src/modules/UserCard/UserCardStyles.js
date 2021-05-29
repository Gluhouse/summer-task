import styled from "styled-components";

export const StyledUserCard = styled.div`
  margin-top: 39px;
  margin-left: 5%;
  margin-right: 7%;
  & p {
    margin: 29px 0 12px;
  }
  & a {
    display: flex;
    margin-bottom: 25px;
  }

  @media (max-width: 840px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > div:nth-child(1) {
      width: 140px;
      height: 140px;
    }
  }

  @media (max-height: 540px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    & > div:nth-child(1) {
      width: 140px;
      height: 140px;
    }
  }

  @media (max-height: 420px) {
    margin-top: 38px;

    & > div:nth-child(1) {
      width: 100px;
      height: 100px;
    }

    & p {
      margin-top: 12px;
      font-size: 18px;
    }

    & a {
      margin-bottom: 12px;
      font-size: 16px;
    }
  }

  @media (max-width: 640px) {
    margin-top: 13px;
    margin-left: 0;
    margin-right: 0;

    & > div:nth-child(1) {
      width: 70px;
      height: 70px;
    }

    & p {
      margin-top: 12px;
      font-size: 18px;
    }

    & a {
      font-size: 16px;
      margin-bottom: 12px;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;

  @media (max-width: 640px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
