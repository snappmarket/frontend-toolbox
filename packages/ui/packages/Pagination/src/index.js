import * as React from 'react';
import PropTypes from 'prop-types';
import { persianNumber } from '@snappmarket/helpers';
import { AngleLeftIcon, AngleRightIcon } from '@iconbox/snappmarket';

import {
  StyledPaginationWrapper,
  StyledPaginationItemsWrapper,
  StyledNavigateButton,
  StyledPaginationItem,
} from './styles';

const Pagination = props => {
  const {
    limit,
    total,
    onPaginate,
    offset,
    threshold,
    hasNavigateButtons,
    hasSkipButtons,
    className,
  } = props;

  const handlePaginate = page => {
    const newOffset = limit * page;
    if (newOffset >= 0 && newOffset < total && newOffset !== offset) {
      onPaginate(newOffset);
    }
  };

  const renderPaginationItems = () => {
    const pagesCount = Math.ceil(total / limit);
    const currentPage = Math.ceil(offset / limit);
    const pages = [];

    let paginationStart = currentPage - threshold;
    if (paginationStart < 0) {
      paginationStart = 0;
    }
    let paginationEnd = paginationStart + threshold * 2 + 1;
    if (paginationEnd > pagesCount) {
      paginationStart -= paginationEnd - pagesCount;
      paginationStart = paginationStart < 0 ? 0 : paginationStart;
      paginationEnd = pagesCount;
    }

    for (let i = paginationStart; i < paginationEnd; i += 1) {
      pages.push(
        <StyledPaginationItem
          onClick={() => handlePaginate(i)}
          className={`page ${currentPage === i ? 'active' : ''}`}
          key={i}
          data-testid="page"
        >
          <span data-testid="pageNumber">{persianNumber(i + 1)}</span>
        </StyledPaginationItem>,
      );
    }
    return (
      <StyledPaginationItemsWrapper>
        {hasSkipButtons && (
          <StyledNavigateButton
            onClick={() => handlePaginate(0)}
            disabled={!currentPage}
            className="first-page"
            data-testid="firstPage"
          >
            <AngleRightIcon color="gray" />
            <AngleRightIcon color="gray" />
          </StyledNavigateButton>
        )}
        {hasNavigateButtons && (
          <StyledNavigateButton
            onClick={() => handlePaginate(currentPage - 1)}
            disabled={!currentPage}
            className="prev-page"
            data-testid="prevPage"
          >
            <AngleRightIcon color="gray" />
          </StyledNavigateButton>
        )}
        {pages}
        {hasNavigateButtons && (
          <StyledNavigateButton
            onClick={() => handlePaginate(currentPage + 1)}
            disabled={(currentPage + 1) * limit >= total}
            className="next-page"
            data-testid="nextPage"
          >
            <AngleLeftIcon color="gray" />
          </StyledNavigateButton>
        )}
        {hasSkipButtons && (
          <StyledNavigateButton
            onClick={() => handlePaginate(pagesCount - 1)}
            disabled={(currentPage + 1) * limit >= total}
            className="last-page"
            data-testid="lastPage"
          >
            <AngleLeftIcon color="gray" />
            <AngleLeftIcon color="gray" />
          </StyledNavigateButton>
        )}
      </StyledPaginationItemsWrapper>
    );
  };

  return (
    !!total && (
      <StyledPaginationWrapper className={className} data-testid="paginationWrapper">
        {renderPaginationItems()}
      </StyledPaginationWrapper>
    )
  );
};

Pagination.propTypes = {
  className: PropTypes.string,
  limit: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onPaginate: PropTypes.func.isRequired,
  threshold: PropTypes.number,
  hasNavigateButtons: PropTypes.bool,
  hasSkipButtons: PropTypes.bool,
};
Pagination.defaultProps = {
  className: '',
  threshold: 5,
  hasNavigateButtons: true,
  hasSkipButtons: true,
};
export default Pagination;
