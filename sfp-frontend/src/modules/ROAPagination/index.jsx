import React from 'react';
import PropTypes from 'prop-types';

const ROAPagination = ({ currentPage, totalPages, pageSize, sBy, sDirection, onPageChange, searchQuery }) => {
  const showPages = 3;
  const pages = [];

  for (let i = currentPage - 1; i <= currentPage + 1; i++) {
    if (i > 0 && i <= totalPages) {
      pages.push(i);
    }
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        { currentPage > 1 && (
          <li className="page-item">
            <a className="page-link" onClick={ () => onPageChange(currentPage - 1, pageSize, sBy, sDirection, searchQuery, true) }>
              Previous
            </a>
          </li>
        ) }

        { pages.map((page) => (
          <li key={ page } className={ `page-item ${page === currentPage ? 'active' : ''}` }>
            <a className="page-link" onClick={ () => onPageChange(page, pageSize, sBy, sDirection, searchQuery, true) }>
              { page }
            </a>
          </li>
        )) }

        { currentPage < totalPages && (
          <li className="page-item">
            <a className="page-link" onClick={ () => onPageChange(currentPage + 1, pageSize, sBy, sDirection, searchQuery, true) }>
              Next
            </a>
          </li>
        ) }
      </ul>
    </nav>
  );
};

ROAPagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  searchQuery: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  setPage: PropTypes.any,
  sBy: PropTypes.any,
  sDirection: PropTypes.any,
  onPageChange: PropTypes.func.isRequired,
};

export default ROAPagination;
