import styled from "styled-components";
import { typography } from "styles";

export const StyledInputBar = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: ${typography.FONT_SIZE_14};
  font-weight: ${typography.FONT_WEIGHT_SEMI_BOLD};
  padding-left: 11px;
  letter-spacing: 0.01em;
`;

export const InputBarWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 6px;
  padding: 12px 0;
  & svg {
    margin-left: 19px;
  }
`;
