/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./IonReorderFourSharp.svg');
}

const IonReorderFourSharp = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="IonReorderFourSharp"
      viewBox="0 0 512 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="IonReorderFourSharpHref"
        xlinkHref={`${importPrefix}#IonReorderFourSharp`}
      />
    </svg>
  );
};

IonReorderFourSharp.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

IonReorderFourSharp.defaultProps = {
  size: 1.5,
};

export default IonReorderFourSharp;
