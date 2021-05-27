import { StyledText } from "./TextStyles";

const Text = ({ children, color = "black", type }) => {
  return (
    <StyledText color={color} type={type}>
      {children}
    </StyledText>
  );
};

export default Text;
