/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./ChevronLeftSharp.svg');
}

const ChevronLeftSharp = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="ChevronLeftSharp"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="ChevronLeftSharpHref"
        xlinkHref={`${importPrefix}#ChevronLeftSharp`}
      />
    </svg>
  );
};

ChevronLeftSharp.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

ChevronLeftSharp.defaultProps = {
  size: 1.5,
};

export default ChevronLeftSharp;
