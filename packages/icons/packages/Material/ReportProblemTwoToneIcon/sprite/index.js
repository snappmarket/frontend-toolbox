/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./ReportProblemTwoToneIcon.svg');
}

const ReportProblemTwoToneIcon = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="ReportProblemTwoToneIcon"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="ReportProblemTwoToneIconHref"
        xlinkHref={`${importPrefix}#ReportProblemTwoToneIcon`}
      />
    </svg>
  );
};

ReportProblemTwoToneIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

ReportProblemTwoToneIcon.defaultProps = {
  size: 1.5,
};

export default ReportProblemTwoToneIcon;
