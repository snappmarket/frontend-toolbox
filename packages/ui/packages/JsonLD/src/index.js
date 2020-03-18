import * as React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/no-danger */
const JsonLD = ({ schema }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
  />
);
/* eslint-enable react/no-danger */

JsonLD.propTypes = {
  schema: PropTypes.object.isRequired,
};

export default JsonLD;
