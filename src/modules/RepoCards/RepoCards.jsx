import { NavigationLink, Text, Pagination } from "components";
import ReactPaginate from "react-paginate";

import { StyledRepoCard, PaginateWrapper, Wrapper } from "./RepoCardStyles";

const RepoCards = ({
  currentPage,
  data,
  handlePageChange,
  loading,
  totalRepos,
  totalPages,
  reposPerPage,
}) => {
  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <Wrapper>
      <Text type="h1">Repositories ({totalRepos})</Text>
      {data.map((item) => (
        <StyledRepoCard key={item.id}>
          <NavigationLink href={item.html_url}>{item.name}</NavigationLink>
          <Text>{item.description ? item.description : "No Description"}</Text>
        </StyledRepoCard>
      ))}
      {/* <Pagination
        currentPage={currentPage}
        reposPerPage={reposPerPage}
        totalRepos={totalRepos}
        handlePageChange={handlePageChange}
      /> */}
      <PaginateWrapper>
        {`${(currentPage + 1) * reposPerPage - (reposPerPage - 1)} - ${
          (currentPage + 1) * reposPerPage
        } of ${totalRepos} items`}
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={totalPages}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          onPageChange={handlePageChange}
        />
      </PaginateWrapper>
    </Wrapper>
  );
};

export default RepoCards;
