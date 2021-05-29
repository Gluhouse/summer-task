import { StyledAvatar } from "./AvatarStyles";

const Avatar = ({ Img, size, toFill = false }) => {
  return <StyledAvatar Img={Img} size={size} toFill={toFill}></StyledAvatar>;
};

export default Avatar;
