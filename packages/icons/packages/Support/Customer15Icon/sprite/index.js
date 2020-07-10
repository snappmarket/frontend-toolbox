/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Customer15Icon.svg');
}

const Customer15Icon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Customer15Icon"
      viewBox="0 0 32 32"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Customer15IconHref"
        xlinkHref={`${importPrefix}#Customer15Icon`}
      />
    </svg>
  );
};

Customer15Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Customer15Icon.defaultProps = {
  size: 1.5,
};

export default Customer15Icon;
