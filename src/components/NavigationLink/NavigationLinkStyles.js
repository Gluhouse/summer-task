import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { typography } from "styles";

import { colors } from "styles";

const commonLinkStyles = css`
  text-decoration: none;
  color: ${colors.PRIMARY};
`;

export const InternalLink = styled(NavLink)`
  ${commonLinkStyles};
  &.active {
  }
`;

export const ExternalLink = styled.a`
  ${commonLinkStyles}
  font-size: ${({ type }) => {
    switch (type) {
      case "p":
        return typography.FONT_SIZE_18;
      default:
        return typography.FONT_SIZE_24;
    }
  }};
  font-weight: ${({ type }) => {
    switch (type) {
      case "p":
        return typography.FONT_WEIGHT_NORMAL;
      default:
        return typography.FONT_WEIGHT_SEMI_BOLD;
    }
  }};
`;
