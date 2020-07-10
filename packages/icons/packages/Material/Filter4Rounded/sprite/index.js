/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Filter4Rounded.svg');
}

const Filter4Rounded = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Filter4Rounded"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Filter4RoundedHref"
        xlinkHref={`${importPrefix}#Filter4Rounded`}
      />
    </svg>
  );
};

Filter4Rounded.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Filter4Rounded.defaultProps = {
  size: 1.5,
};

export default Filter4Rounded;
