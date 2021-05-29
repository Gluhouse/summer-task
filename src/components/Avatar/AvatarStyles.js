import styled from "styled-components";
import { colors } from "styles";

export const StyledAvatar = styled.div`
  background-image: url(${({ Img }) => Img});
  background-size: 100%;
  border-radius: 50%;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  ${({ toFill }) => (toFill ? `background-color:${colors.PRIMARY}` : "")};
  svg {
    border-radius: 50%;
  }
`;
