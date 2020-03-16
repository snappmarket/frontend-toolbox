import * as React from 'react';
import PropTypes from 'prop-types';

const JsonLD = ({ schema }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
  />
);

JsonLD.propTypes = {
  schema: PropTypes.object.isRequired,
};

export default JsonLD;
