import { useState } from "react";
import axios from "axios";
import api from "constants/api.json";

import { StyledHeaderSearchBar } from "./HeaderSearchBarStyles";
import { InputBar } from "components";
import { Logo } from "assets";

const HeaderSearchBar = ({
  data,
  setData,
  setLoading,
  error,
  setError,
  setCurrentPage,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const resetPage = () => {
    setInputValue("");
    setLoading(false);
    setSearchValue("");
    setData({});
    setError({});
    setCurrentPage(0);
  };

  const validation = () => {
    let userInData =
      "user" in data &&
      data.user.login.toLowerCase() === inputValue.toLowerCase();

    let cannotSearchUser =
      inputValue === searchValue && (error !== "" || error !== 403);

    let emptyInput = inputValue === "";

    if (userInData || cannotSearchUser || emptyInput) {
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let validationPassed = validation();

    if (!validationPassed) {
      return;
    }

    setLoading(true);

    const requestUser = axios.get(api.url + inputValue.toString());
    const requestRepos = axios.get(api.url + inputValue.toString() + "/repos");

    axios
      .all([requestUser, requestRepos])
      .then(
        axios.spread((...res) => {
          const user = res[0];
          const repos = res[1];
          setCurrentPage(0);
          setSearchValue("");
          setData({ user: user.data, repos: repos.data });
          setError({});
          setLoading(false);
        })
      )
      .catch((err) => {
        setSearchValue(inputValue);
        setData({});
        setError(err.response);
        setLoading(false);
      });
  };

  return (
    <StyledHeaderSearchBar>
      <form onSubmit={handleSubmit}>
        <a href={"./main"} onClick={resetPage}>
          <Logo />
        </a>
        <InputBar onChange={handleChange}>{inputValue}</InputBar>
      </form>
    </StyledHeaderSearchBar>
  );
};

export default HeaderSearchBar;
