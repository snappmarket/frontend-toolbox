/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5CalendarTimesSolid.svg');
}

const Fa5CalendarTimesSolid = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5CalendarTimesSolid"
      viewBox="0 0 448 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5CalendarTimesSolidHref"
        xlinkHref={`${importPrefix}#Fa5CalendarTimesSolid`}
      />
    </svg>
  );
};

Fa5CalendarTimesSolid.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5CalendarTimesSolid.defaultProps = {
  size: 1.5,
};

export default Fa5CalendarTimesSolid;
