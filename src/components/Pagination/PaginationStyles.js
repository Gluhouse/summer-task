import styled from "styled-components";
import { colors } from "styles";

export const StyledPagination = styled.div``;

export const Ul = styled.ul``;

export const Li = styled.li`
  color: ${({ active }) => (active ? colors.PRIMARY : colors.GRAY)};
`;
