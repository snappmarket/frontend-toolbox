/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./IonNewspaperSharp.svg');
}

const IonNewspaperSharp = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="IonNewspaperSharp"
      viewBox="0 0 512 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="IonNewspaperSharpHref"
        xlinkHref={`${importPrefix}#IonNewspaperSharp`}
      />
    </svg>
  );
};

IonNewspaperSharp.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

IonNewspaperSharp.defaultProps = {
  size: 1.5,
};

export default IonNewspaperSharp;
