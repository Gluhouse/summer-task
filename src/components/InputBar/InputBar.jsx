import { StyledInputBar, InputBarWrapper } from "./InputBarStyles";

const InputBar = ({ children, onChange, onBlur }) => {
  return (
    <InputBarWrapper>
      <StyledInputBar
        type="text"
        onChange={onChange}
        defaultValue={children}
        onBlur={onBlur}
      ></StyledInputBar>
    </InputBarWrapper>
  );
};

export default InputBar;
