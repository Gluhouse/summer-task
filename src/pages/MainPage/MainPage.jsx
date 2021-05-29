import React, { useState } from "react";
import {
  StyledMainPage,
  Wrapper,
  Loading,
  LoadingWrapper,
  NotFound,
  InitialState,
  Error,
  NoRepos,
} from "./MainPageStyles";
import { HeaderSearchBar, UserCard, RepoCards } from "modules";
import { Union, SearchIcon, StopSign, NoReposIcon } from "assets";

import { useResizeDetector } from "react-resize-detector";

const MainPage = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [error, setError] = useState({});

  const findRepos = ({ windowHeight, inputHeight = 194, cardHeight }) => {
    return window.innerWidth <= 640 || window.innerHeight <= 460
      ? 5
      : Math.floor((windowHeight - inputHeight) / cardHeight);
  };

  const findCardHeight = (windowWidth, windowHeight) => {
    return windowWidth <= 840 || windowHeight <= 670 ? 82 : 135;
  };

  let cardHeight = findCardHeight(window.innerWidth, window.innerHeight);

  let reposPerPage = findRepos({
    windowHeight: window.innerHeight,
    cardHeight,
  });

  const onResize = () => {
    reposPerPage = findRepos({
      windowHeight: window.innerHeight,
      cardHeight,
    });
  };

  const { ref } = useResizeDetector({ onResize });

  let currentRepos = [];
  let totalRepos = 0;
  let totalPages = 0;

  if (data.repos) {
    const indexOfLastRepo = (currentPage + 1) * reposPerPage;
    const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
    currentRepos = data.repos.slice(indexOfFirstRepo, indexOfLastRepo);
    totalRepos = data.repos.length;
    totalPages = Math.ceil(data.repos.length / reposPerPage);
  }

  const handlePageChange = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const renderSwitch = (error) => {
    return +error.status === 404 ? (
      <NotFound>
        <Union />
        <p>User not found</p>
      </NotFound>
    ) : (
      <Error>
        <StopSign />
        <p>{error.data.message}</p>
      </Error>
    );
  };

  return (
    <StyledMainPage ref={ref}>
      <HeaderSearchBar
        data={data}
        setData={setData}
        setLoading={setLoading}
        error={error}
        setError={setError}
        setCurrentPage={setCurrentPage}
      ></HeaderSearchBar>
      <Wrapper>
        {loading ? (
          <LoadingWrapper>
            <Loading />
          </LoadingWrapper>
        ) : (
          ""
        )}
        {!error.data && !data.user ? (
          <InitialState>
            <SearchIcon />
            <p>Start with searching a GitHub user</p>
          </InitialState>
        ) : (
          ""
        )}
        {error.data ? (
          renderSwitch(error)
        ) : (
          <>
            {data.user ? <UserCard data={data} /> : ""}
            {data.repos && data.repos.length > 0 ? (
              <RepoCards
                currentPage={currentPage}
                data={currentRepos}
                loading={loading}
                totalRepos={totalRepos}
                totalPages={totalPages}
                reposPerPage={reposPerPage}
                handlePageChange={handlePageChange}
              ></RepoCards>
            ) : data.user ? (
              <NoRepos>
                <NoReposIcon />
                <p>Repository list is empty</p>
              </NoRepos>
            ) : (
              ""
            )}
          </>
        )}
      </Wrapper>
    </StyledMainPage>
  );
};

export default MainPage;
