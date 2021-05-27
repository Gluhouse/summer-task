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
  }

  & > p {
    margin: 0 0 24px 32px;
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
  width: 69%;
  display: flex;
  flex-direction: column;

  & > p {
    margin: 29px 0;
  }
`;

export const PaginationBarWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & p {
    font-size: 14px;
    color: ${colors.GRAY};
    margin-right: 14px;
  }
`;
