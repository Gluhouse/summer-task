import { useState, useEffect } from "react";

import { StyledPresentationPage, TempWrapper } from "./PresentationPageStyles";
import { RoundImg, InputBar, Text, NavigationLink } from "components";
import { Logo, Avatar, SearchIcon } from "assets";
import { HeaderSearchBar, UserCard, RepoCards } from "modules";
import { typography } from "styles";

const PresentationPage = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const reposPerPage = 4;

  let currentRepos = [];
  let totalRepos = 0;
  let totalPages = 0;

  if ("repos" in data) {
    const indexOfLastRepo = (currentPage + 1) * reposPerPage;
    const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
    currentRepos = data.repos.slice(indexOfFirstRepo, indexOfLastRepo);
    totalRepos = data.repos.length;
    totalPages = Math.ceil(data.repos.length / reposPerPage);
    console.log(totalPages);
  }

  const handlePageChange = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  return (
    <StyledPresentationPage>
      <h1>-------------------------------------------</h1>
      <br />
      <h1>Components</h1>
      <br />
      <h1>RoundImg (size/ Img/ fill)</h1>
      <br />
      {"user" in data ? (
        <RoundImg size="280px" Img={data.user.avatar_url} />
      ) : (
        ""
      )}
      <Logo style={{ fill: "blue" }}></Logo>
      <br />
      <h1>InputBar(Img/ children)</h1>
      <br />
      <InputBar Img={SearchIcon}>123</InputBar>
      <br />
      <Text>NORMAL</Text>
      <Text type="h2">SEMI-BOLD</Text>
      <Text type="h1">BOLD</Text>
      <h1>-------------------------------------------</h1>
      {/* <br />
      <h1>Modules</h1>
      <br />
      <h1>-------------------------------------------</h1>

      <br />
      <h1>HeaderSearchBar</h1> */}
      {/* <TempWrapper>
        <RoundImg size="40px" Img={Logo} fill={true} />

        <InputBar Img={SearchIcon}>{123}</InputBar>
      </TempWrapper> */}
      <HeaderSearchBar
        data={data}
        setData={setData}
        setLoading={setLoading}
      ></HeaderSearchBar>
      <button
        style={{ width: "40px", height: "40px", backgroundColor: "black" }}
        onClick={() => console.log(data)}
      ></button>
      <NavigationLink href={"https://www.youtube.com/watch?v=K5CCUdu7xFI"}>
        TEXT
      </NavigationLink>
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
    </StyledPresentationPage>
  );
};

export default PresentationPage;
