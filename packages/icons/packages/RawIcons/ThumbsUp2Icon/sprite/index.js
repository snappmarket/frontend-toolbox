/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./ThumbsUp2Icon.svg');
}

const ThumbsUp2Icon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="ThumbsUp2Icon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="ThumbsUp2IconHref"
        xlinkHref={`${importPrefix}#ThumbsUp2Icon`}
      />
    </svg>
  );
};

ThumbsUp2Icon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

ThumbsUp2Icon.defaultProps = {
  size: 1.5,
};

export default ThumbsUp2Icon;
