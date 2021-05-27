import { useState } from "react";
import axios from "axios";
import api from "constants/api.json";

import { StyledHeaderSearchBar } from "./HeaderSearchBarStyles";
import { RoundImg, InputBar } from "components";
import { Logo, SearchIcon } from "assets";

const HeaderSearchBar = ({ data, setData, setLoading }) => {
  // html_url | name | description |
  const [inputValue, setInputValue] = useState("");
  //   const [data, setData] = useState({});

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleBlur = (e) => {
    console.log("blurred");
    handleSubmit(e);
    console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      "user" in data &&
      data.user.login.toLowerCase() === inputValue.toLowerCase()
    ) {
      return;
    }

    setLoading(true);

    const requestUser = axios.get(api.url + inputValue.toString());
    const requestRepos = axios.get(api.url + inputValue.toString() + "/repos");

    console.log("submit");
    axios
      .all([requestUser, requestRepos])
      .then(
        axios.spread((...res) => {
          const user = res[0];
          const repos = res[1];
          console.log(user, repos);
          setData({ user: user.data, repos: repos.data });
          setLoading(false);
        })
      )
      .catch((err) => console.log(err));
  };

  return (
    <StyledHeaderSearchBar>
      <form onSubmit={handleSubmit}>
        <Logo />
        <InputBar onChange={handleChange} onBlur={handleBlur}>
          {inputValue}
        </InputBar>
      </form>
    </StyledHeaderSearchBar>
  );
};

export default HeaderSearchBar;
