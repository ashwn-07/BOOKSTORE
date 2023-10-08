import React from 'react';

import { usePagination, DOTS } from '../Hooks/UsePageination';
import PaginationStyle from './Pagination.module.scss';
const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={`${PaginationStyle.pagination_container} ${className ? className : ''}`}
    >
      <li
        className={`${PaginationStyle.pagination_item} ${currentPage === 1 ? PaginationStyle.disabled : ''}`}
        onClick={onPrevious}
      >
        <div className={`${PaginationStyle.arrow} ${PaginationStyle.left}`} />
      </li>
      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return <li className={`${PaginationStyle.pagination_item} ${PaginationStyle.dots}`}>&#8230;</li>;
        }

        return (
          <li
            className={`${PaginationStyle.pagination_item} ${pageNumber === currentPage ? PaginationStyle.selected : ''}`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={`${PaginationStyle.pagination_item} ${currentPage === lastPage ? PaginationStyle.disabled : ''}`}
        onClick={onNext}
      >
        <div className={`${PaginationStyle.arrow} ${PaginationStyle.right}`} />
      </li>
    </ul>
  );
};

export default Pagination;
