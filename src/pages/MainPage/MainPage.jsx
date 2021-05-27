import React, { useState } from "react";
import { StyledMainPage, Wrapper } from "./MainPageStyles";
import { HeaderSearchBar, UserCard, RepoCards } from "modules";

const MainPage = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const reposPerPage = Math.floor((window.innerHeight - 194) / 135);

  let currentRepos = [];
  let totalRepos = 0;
  let totalPages = 0;

  if ("repos" in data) {
    const indexOfLastRepo = (currentPage + 1) * reposPerPage;
    const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
    currentRepos = data.repos.slice(indexOfFirstRepo, indexOfLastRepo);
    totalRepos = data.repos.length;
    totalPages = Math.ceil(data.repos.length / reposPerPage);
  }

  const handlePageChange = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  return (
    <StyledMainPage>
      <HeaderSearchBar
        data={data}
        setData={setData}
        setLoading={setLoading}
      ></HeaderSearchBar>
      <Wrapper>
        {"user" in data ? <UserCard data={data} /> : ""}
        {"repos" in data ? (
          <RepoCards
            currentPage={currentPage}
            data={currentRepos}
            loading={loading}
            totalRepos={totalRepos}
            totalPages={totalPages}
            reposPerPage={reposPerPage}
            handlePageChange={handlePageChange}
          />
        ) : (
          ""
        )}
      </Wrapper>
    </StyledMainPage>
  );
};

export default MainPage;
