import { StyledInputBar, InputBarWrapper } from "./InputBarStyles";
import { SearchIcon } from "assets";

const InputBar = ({ children, onChange, onBlur }) => {
  return (
    <InputBarWrapper>
      <SearchIcon />
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
