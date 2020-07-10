/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./IonShieldSharp.svg');
}

const IonShieldSharp = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="IonShieldSharp"
      viewBox="0 0 512 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="IonShieldSharpHref"
        xlinkHref={`${importPrefix}#IonShieldSharp`}
      />
    </svg>
  );
};

IonShieldSharp.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

IonShieldSharp.defaultProps = {
  size: 1.5,
};

export default IonShieldSharp;
