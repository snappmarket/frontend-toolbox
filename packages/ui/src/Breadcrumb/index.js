import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Icon from '../Icon';

import {
  StyledBreadcrumbWrapper,
  StyledBreadcrumbItem,
  StyledBreadcrumbItemSeparator,
  StyledBreadcrumbItemWrapper
} from './styles';

const Breadcrumb = props => {
  const { items, className, ...rest } = props;
  const breadcrumbItems = items.map((item, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <StyledBreadcrumbItemWrapper key={index}>
      {!!index && (
        <StyledBreadcrumbItemSeparator>
          <Icon name='angle-left' />
        </StyledBreadcrumbItemSeparator>
      )}
      <StyledBreadcrumbItem>
        <Link to={item.slug || item.id}>{item.title}</Link>
      </StyledBreadcrumbItem>
    </StyledBreadcrumbItemWrapper>
    /* eslint-enable indent */
  ));
  return (
    <StyledBreadcrumbWrapper className={className} {...rest}>
      {breadcrumbItems}
    </StyledBreadcrumbWrapper>
  );
};

Breadcrumb.propTypes = {
  items    : PropTypes.array,
  className: PropTypes.string
};

export default Breadcrumb;
