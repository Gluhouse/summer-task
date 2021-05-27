import { StyledRoundImg } from "./RoundImgStyles";

const RoundImg = ({ Img, size, toFill = false }) => {
  return (
    <StyledRoundImg Img={Img} size={size} toFill={toFill}></StyledRoundImg>
  );
};

export default RoundImg;
