/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./IonReaderOutline.svg');
}

const IonReaderOutline = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="IonReaderOutline"
      viewBox="0 0 512 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="IonReaderOutlineHref"
        xlinkHref={`${importPrefix}#IonReaderOutline`}
      />
    </svg>
  );
};

IonReaderOutline.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

IonReaderOutline.defaultProps = {
  size: 1.5,
};

export default IonReaderOutline;
