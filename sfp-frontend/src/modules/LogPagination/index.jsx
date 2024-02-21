import React from 'react';
import PropTypes from 'prop-types';

const LogPagination = ({ currentPage, totalPages, onPageChange, logId }) => {
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
            <a className="page-link" onClick={ () => onPageChange(logId, currentPage - 1, false) }>
              Previous
            </a>
          </li>
        ) }

        { pages.map((page) => (
          <li key={ page } className={ `page-item ${page === currentPage ? 'active' : ''}` }>
            <a className="page-link" onClick={ () => onPageChange(logId, page, false) }>
              { page }
            </a>
          </li>
        )) }

        { currentPage < totalPages && (
          <li className="page-item">
            <a className="page-link" onClick={ () => onPageChange(logId, currentPage + 1, false) }>
              Next
            </a>
          </li>
        ) }
      </ul>
    </nav>
  );
};

LogPagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  setPage: PropTypes.any,
  logId: PropTypes.any,
  onPageChange: PropTypes.func.isRequired,
};

export default LogPagination;
