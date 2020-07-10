/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./IcomoonHtmlFive2.svg');
}

const IcomoonHtmlFive2 = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="IcomoonHtmlFive2"
      viewBox="0 0 16 16"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="IcomoonHtmlFive2Href"
        xlinkHref={`${importPrefix}#IcomoonHtmlFive2`}
      />
    </svg>
  );
};

IcomoonHtmlFive2.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

IcomoonHtmlFive2.defaultProps = {
  size: 1.5,
};

export default IcomoonHtmlFive2;
