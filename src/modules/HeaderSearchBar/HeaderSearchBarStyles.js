import styled from "styled-components";
import { colors } from "styles";

export const StyledHeaderSearchBar = styled.div`
  width: 100%;
  background-color: ${colors.PRIMARY};
  display: flex;
  align-items: center;
  height: 72px;
  & a {
    margin-left: 41px;
    display: block;
  }
  & div {
    margin-left: 22px;
    width: 40%;
  }
  & form {
    width: 100%;
    display: flex;
    align-items: center;
  }

  @media (max-width: 640px) {
    & div {
      width: 60%;
    }
  }
`;
