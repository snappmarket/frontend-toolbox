/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./PriorityHighRounded.svg');
}

const PriorityHighRounded = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="PriorityHighRounded"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="PriorityHighRoundedHref"
        xlinkHref={`${importPrefix}#PriorityHighRounded`}
      />
    </svg>
  );
};

PriorityHighRounded.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

PriorityHighRounded.defaultProps = {
  size: 1.5,
};

export default PriorityHighRounded;
