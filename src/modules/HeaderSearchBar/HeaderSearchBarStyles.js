import styled from "styled-components";
import { colors } from "styles";

export const StyledHeaderSearchBar = styled.div`
  width: 100%;
  background-color: ${colors.PRIMARY};
  display: flex;
  align-items: center;
  height: 72px;
  & svg {
    margin-left: 41px;
  }
  & div {
    margin-left: 41px;
    width: 40%;
  }
  & form {
    width: 100%;
    display: flex;
    align-items: center;
  }
`;
