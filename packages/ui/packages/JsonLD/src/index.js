import * as React from 'react';
import PropTypes from 'prop-types';

const JsonLD = ({ schema }) => (
  <script type="application/ld+json">
    {encodeURIComponent(JSON.stringify(schema))}
  </script>
);

JsonLD.propTypes = {
  schema: PropTypes.object.isRequired,
};

export default JsonLD;
