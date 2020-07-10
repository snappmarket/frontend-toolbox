/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./SubdirectoryArrowLeftRounded.svg');
}

const SubdirectoryArrowLeftRounded = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="SubdirectoryArrowLeftRounded"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="SubdirectoryArrowLeftRoundedHref"
        xlinkHref={`${importPrefix}#SubdirectoryArrowLeftRounded`}
      />
    </svg>
  );
};

SubdirectoryArrowLeftRounded.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

SubdirectoryArrowLeftRounded.defaultProps = {
  size: 1.5,
};

export default SubdirectoryArrowLeftRounded;
