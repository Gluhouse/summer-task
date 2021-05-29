import styled from "styled-components";
import { typography } from "styles";

export const StyledText = styled.p`
  font-size: ${({ type }) => {
    switch (type) {
      case "h1":
        return typography.FONT_SIZE_32;
      case "h2":
        return typography.FONT_SIZE_26;
      // case "p"
      default:
        return typography.FONT_SIZE_16;
    }
  }};
  font-weight: ${({ type }) => {
    switch (type) {
      case "h1":
        return typography.FONT_WEIGHT_BOLD;
      case "h2":
        return typography.FONT_WEIGHT_SEMI_BOLD;
      // case "p"
      default:
        return typography.FONT_WEIGHT_NORMAL;
    }
  }};
  color: ${({ color }) => (color ? color : "black")};
`;
