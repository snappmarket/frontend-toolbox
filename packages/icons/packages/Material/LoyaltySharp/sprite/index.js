/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./LoyaltySharp.svg');
}

const LoyaltySharp = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="LoyaltySharp"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="LoyaltySharpHref"
        xlinkHref={`${importPrefix}#LoyaltySharp`}
      />
    </svg>
  );
};

LoyaltySharp.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

LoyaltySharp.defaultProps = {
  size: 1.5,
};

export default LoyaltySharp;
