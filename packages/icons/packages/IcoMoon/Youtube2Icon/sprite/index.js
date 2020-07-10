/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Youtube2Icon.svg');
}

const Youtube2Icon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Youtube2Icon"
      viewBox="0 0 40 16"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Youtube2IconHref"
        xlinkHref={`${importPrefix}#Youtube2Icon`}
      />
    </svg>
  );
};

Youtube2Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Youtube2Icon.defaultProps = {
  size: 1.5,
};

export default Youtube2Icon;
