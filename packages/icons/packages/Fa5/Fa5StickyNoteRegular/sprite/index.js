/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5StickyNoteRegular.svg');
}

const Fa5StickyNoteRegular = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5StickyNoteRegular"
      viewBox="0 0 448 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5StickyNoteRegularHref"
        xlinkHref={`${importPrefix}#Fa5StickyNoteRegular`}
      />
    </svg>
  );
};

Fa5StickyNoteRegular.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5StickyNoteRegular.defaultProps = {
  size: 1.5,
};

export default Fa5StickyNoteRegular;
