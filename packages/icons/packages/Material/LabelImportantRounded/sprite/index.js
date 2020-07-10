/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./LabelImportantRounded.svg');
}

const LabelImportantRounded = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="LabelImportantRounded"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="LabelImportantRoundedHref"
        xlinkHref={`${importPrefix}#LabelImportantRounded`}
      />
    </svg>
  );
};

LabelImportantRounded.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

LabelImportantRounded.defaultProps = {
  size: 1.5,
};

export default LabelImportantRounded;
