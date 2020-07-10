/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./EvaUmbrellaOutline.svg');
}

const EvaUmbrellaOutline = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="EvaUmbrellaOutline"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="EvaUmbrellaOutlineHref"
        xlinkHref={`${importPrefix}#EvaUmbrellaOutline`}
      />
    </svg>
  );
};

EvaUmbrellaOutline.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

EvaUmbrellaOutline.defaultProps = {
  size: 1.5,
};

export default EvaUmbrellaOutline;
