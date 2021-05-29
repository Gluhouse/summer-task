import { NavigationLink, Text } from "components";
import ReactPaginate from "react-paginate";

import {
  StyledRepoCard,
  PaginateWrapper,
  PaginationBarWrapper,
  Wrapper,
} from "./RepoCardStyles";

const RepoCards = ({
  currentPage,
  data,
  handlePageChange,
  totalRepos,
  totalPages,
  reposPerPage,
}) => {
  return (
    <Wrapper>
      <Text type="h1">Repositories ({totalRepos})</Text>
      {data.map((item) => (
        <StyledRepoCard key={item.id}>
          <NavigationLink href={item.html_url}>{item.name}</NavigationLink>
          <Text style={{ marginBottom: "24px" }}>
            {item.description ? item.description : "No Description"}
          </Text>
        </StyledRepoCard>
      ))}

      <PaginationBarWrapper>
        <p>{`${(currentPage + 1) * reposPerPage - (reposPerPage - 1)} - ${
          (currentPage + 1) * reposPerPage > totalRepos
            ? totalRepos
            : (currentPage + 1) * reposPerPage
        } of ${totalRepos} items`}</p>

        <PaginateWrapper>
          <ReactPaginate
            pageCount={totalPages}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            activeLinkClassName="active"
            breakClassName="break-me"
            containerClassName="pagination"
            disabledClassName="disabled"
            disableInitialCallback={true}
            previousLabel={"<"}
            nextClassName="btn"
            nextLabel={">"}
            previousClassName="btn"
            pageLinkClassName={"page"}
            onPageChange={handlePageChange}
            forcePage={currentPage}
          />
        </PaginateWrapper>
      </PaginationBarWrapper>
    </Wrapper>
  );
};

export default RepoCards;
