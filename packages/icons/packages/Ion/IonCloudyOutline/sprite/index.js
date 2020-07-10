/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./IonCloudyOutline.svg');
}

const IonCloudyOutline = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="IonCloudyOutline"
      viewBox="0 0 512 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="IonCloudyOutlineHref"
        xlinkHref={`${importPrefix}#IonCloudyOutline`}
      />
    </svg>
  );
};

IonCloudyOutline.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

IonCloudyOutline.defaultProps = {
  size: 1.5,
};

export default IonCloudyOutline;
