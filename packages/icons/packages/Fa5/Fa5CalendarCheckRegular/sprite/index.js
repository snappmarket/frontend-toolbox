/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5CalendarCheckRegular.svg');
}

const Fa5CalendarCheckRegular = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5CalendarCheckRegular"
      viewBox="0 0 448 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5CalendarCheckRegularHref"
        xlinkHref={`${importPrefix}#Fa5CalendarCheckRegular`}
      />
    </svg>
  );
};

Fa5CalendarCheckRegular.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5CalendarCheckRegular.defaultProps = {
  size: 1.5,
};

export default Fa5CalendarCheckRegular;
