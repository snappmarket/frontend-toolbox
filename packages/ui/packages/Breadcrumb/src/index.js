import * as React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AngleLeftIcon } from '@iconbox/snappmarket';

import {
  StyledBreadcrumbWrapper,
  StyledBreadcrumbItem,
  StyledBreadcrumbItemSeparator,
  StyledBreadcrumbItemWrapper,
} from './styles';

const Breadcrumb = ({ items, className, separatorIcon, ...rest }) => {
  const breadcrumbItems = items.map((item, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <StyledBreadcrumbItemWrapper key={index}>
      {!!index && (
        <StyledBreadcrumbItemSeparator>
          {separatorIcon || <AngleLeftIcon size={1.3} color="gray" />}
        </StyledBreadcrumbItemSeparator>
      )}
      <StyledBreadcrumbItem>
        {item.link ?
          <Link data-testid="breadcrumbLink" to={item.link}>{item.title}</Link>
          :
          item.title
        }
      </StyledBreadcrumbItem>
    </StyledBreadcrumbItemWrapper>
    /* eslint-enable indent */
  ));
  return (
    <StyledBreadcrumbWrapper data-testid="breadcrumb" className={className} {...rest}>
      {breadcrumbItems}
    </StyledBreadcrumbWrapper>
  );
};

Breadcrumb.propTypes = {
  items: PropTypes.array,
  className: PropTypes.string,
  separatorIcon: PropTypes.node,
};

Breadcrumb.defaultProps = {
  items: [],
};

export default Breadcrumb;
