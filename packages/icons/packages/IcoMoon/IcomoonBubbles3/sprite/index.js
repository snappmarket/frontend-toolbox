/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./IcomoonBubbles3.svg');
}

const IcomoonBubbles3 = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="IcomoonBubbles3"
      viewBox="0 0 18 16"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="IcomoonBubbles3Href"
        xlinkHref={`${importPrefix}#IcomoonBubbles3`}
      />
    </svg>
  );
};

IcomoonBubbles3.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

IcomoonBubbles3.defaultProps = {
  size: 1.5,
};

export default IcomoonBubbles3;
