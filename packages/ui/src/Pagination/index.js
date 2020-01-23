import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledPaginationWrapper,
  StyledPaginationItemsWrapper,
  StyledNavigateButton,
  StyledPaginationItem,
} from './styles';

import Icon from '../Icon';
import { persianNumber } from '../../../constants/Helpers/numberHelpers';

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
    if (newOffset >= 0 && newOffset <= total && newOffset !== offset) {
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
          className={currentPage === i ? 'active' : ''}
          key={i}
        >
          <span>{persianNumber(i + 1)}</span>
        </StyledPaginationItem>,
      );
    }
    return (
      <StyledPaginationItemsWrapper>
        {hasSkipButtons && (
          <StyledNavigateButton
            onClick={() => handlePaginate(0)}
            disabled={!currentPage}
          >
            <Icon name="angle-right" />
            <Icon name="angle-right" />
          </StyledNavigateButton>
        )}
        {hasNavigateButtons && (
          <StyledNavigateButton
            onClick={() => handlePaginate(currentPage - 1)}
            disabled={!currentPage}
          >
            <Icon name="angle-right" />
          </StyledNavigateButton>
        )}
        {pages}
        {hasNavigateButtons && (
          <StyledNavigateButton
            onClick={() => handlePaginate(currentPage + 1)}
            disabled={(currentPage + 1) * limit >= total}
          >
            <Icon name="angle-left" />
          </StyledNavigateButton>
        )}
        {hasSkipButtons && (
          <StyledNavigateButton
            onClick={() => handlePaginate(pagesCount - 1)}
            disabled={(currentPage + 1) * limit >= total}
          >
            <Icon name="angle-left" />
            <Icon name="angle-left" />
          </StyledNavigateButton>
        )}
      </StyledPaginationItemsWrapper>
    );
  };

  return (
    !!total && (
      <StyledPaginationWrapper className={className}>
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
