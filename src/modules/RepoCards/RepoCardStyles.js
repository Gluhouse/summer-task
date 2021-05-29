import styled from "styled-components";
import { colors } from "styles";

export const StyledRepoCard = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 100%;
  margin-bottom: 24px;
  & > a {
    padding-top: 24px;
    margin: 0 0 14px 32px;
    white-space: nowrap;
    width: 0%;
  }

  & > p {
    display: flex;
    margin: 0 32px 24px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  @media (max-width: 840px), (max-height: 670px) {
    margin-bottom: 12px;
    & > a {
      padding-top: 12px;
      margin-bottom: 5px;
      font-size: 20px;
    }

    & > p {
      font-size: 14px;
      margin-bottom: 12px;
    }
  }

  @media (max-width: 640px) {
    width: 97%;
  }
`;

export const PaginateWrapper = styled.div`
  .pagination {
    display: flex;
    cursor: pointer;
    text-align: center;
    list-style: none;
    line-height: 21px;
    margin-left: auto;
  }

  .disabled {
    color: ${colors.GRAY} !important;
  }

  .btn {
    color: ${colors.PRIMARY};
    margin-left: 10px;
  }

  .break-me {
    cursor: default;
    margin-left: 10px;
  }

  .active {
    color: white;
    background-color: ${colors.PRIMARY};
  }

  .page {
    padding: 2px 6px;
    border-radius: 3px;
    margin-left: 10px;
  }
`;

export const Wrapper = styled.div`
  width: 71%;
  display: flex;
  flex-direction: column;

  & > p {
    margin: 29px 0;
  }

  @media (max-width: 1720px) {
    width: 66%;
  }

  @media (max-width: 1300px) {
    width: 60%;
  }

  @media (max-width: 1030px) {
    width: 54%;
  }

  @media (max-width: 740px) {
    width: 45%;
  }

  @media (max-width: 840px), (max-height: 670px) {
    & > p {
      font-size: 28px;
    }
  }

  @media (max-width: 640px), (max-height: 540px) {
    width: 100%;
    align-items: center;
  }
`;

export const PaginationBarWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 10px;
  margin-right: 20px;

  & p {
    font-size: 14px;
    color: ${colors.GRAY};
    margin-right: 14px;
    white-space: nowrap;
  }

  @media (max-width: 1050px) {
    justify-content: center;
    margin-right: 0;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    & p {
      margin-right: 0;
      margin-top: 10px;
      order: 2;
    }
  }
`;
