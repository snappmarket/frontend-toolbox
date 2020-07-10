/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa4Tripadvisor.svg');
}

const Fa4Tripadvisor = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa4Tripadvisor"
      viewBox="0 0 2304 1792"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa4TripadvisorHref"
        xlinkHref={`${importPrefix}#Fa4Tripadvisor`}
      />
    </svg>
  );
};

Fa4Tripadvisor.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa4Tripadvisor.defaultProps = {
  size: 1.5,
};

export default Fa4Tripadvisor;
