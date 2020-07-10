/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./CalendarTodayOutlined.svg');
}

const CalendarTodayOutlined = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="CalendarTodayOutlined"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="CalendarTodayOutlinedHref"
        xlinkHref={`${importPrefix}#CalendarTodayOutlined`}
      />
    </svg>
  );
};

CalendarTodayOutlined.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

CalendarTodayOutlined.defaultProps = {
  size: 1.5,
};

export default CalendarTodayOutlined;
