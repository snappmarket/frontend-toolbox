/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./SubwayTwoTone.svg');
}

const SubwayTwoTone = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="SubwayTwoTone"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="SubwayTwoToneHref"
        xlinkHref={`${importPrefix}#SubwayTwoTone`}
      />
    </svg>
  );
};

SubwayTwoTone.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

SubwayTwoTone.defaultProps = {
  size: 1.5,
};

export default SubwayTwoTone;
