/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Allday3Icon.svg');
}

const Allday3Icon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Allday3Icon"
      viewBox="0 0 32 32"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Allday3IconHref"
        xlinkHref={`${importPrefix}#Allday3Icon`}
      />
    </svg>
  );
};

Allday3Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Allday3Icon.defaultProps = {
  size: 1.5,
};

export default Allday3Icon;
