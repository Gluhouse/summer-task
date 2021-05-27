import { StyledUserCard, Wrapper } from "./UserCardStyles";

import { RoundImg, Text, NavigationLink } from "components";
import { FollowersIcon, PersonIcon } from "assets";
const UserCard = ({ data }) => {
  const checkNumber = (num) => {
    if (+num / 1000 >= 1) {
      const intNum = Math.floor(+num / 1000);
      const remainder = Math.floor((+num % 1000) / 100);

      return `${intNum}.${remainder}k`;
    }
    return num;
  };

  return (
    <StyledUserCard>
      <RoundImg size="280px" Img={data.user.avatar_url} />
      <Text type="h2">{data.user.name}</Text>
      <NavigationLink href={data.user.html_url} type="p">
        {data.user.login}
      </NavigationLink>
      <Wrapper>
        <div style={{ marginRight: "20px" }}>
          <FollowersIcon style={{ marginRight: "9px" }} />
          {checkNumber(data.user.followers)} followers
        </div>
        <div>
          <PersonIcon /> {checkNumber(data.user.following)} following
        </div>
      </Wrapper>
    </StyledUserCard>
  );
};

export default UserCard;
