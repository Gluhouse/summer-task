import { StyledPagination, Ul, Li, A } from "./PaginationStyles";
const Pagination = ({
  currentPage,
  reposPerPage,
  totalRepos,
  handlePageChange,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <StyledPagination>
      <Ul>
        <Li
          active={currentPage === 1 ? false : true}
          key="prev"
          onClick={() =>
            currentPage === 1 ? "" : handlePageChange(currentPage - 1)
          }
        >
          {"<"}
        </Li>
        {pageNumbers.map((num) => {
          if (pageNumbers >= 10) {
            return;
          }

          return (
            <Li
              active={currentPage === num ? false : true}
              onClick={() => handlePageChange(num)}
              key={num}
            >
              {num}
            </Li>
          );
        })}
        <Li
          active={currentPage === pageNumbers.length ? false : true}
          key="next"
          onClick={() =>
            currentPage === pageNumbers.length
              ? ""
              : handlePageChange(currentPage + 1)
          }
        >
          {">"}
        </Li>
      </Ul>
    </StyledPagination>
  );
};

export default Pagination;
