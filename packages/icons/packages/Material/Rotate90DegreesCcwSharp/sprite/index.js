/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Rotate90DegreesCcwSharp.svg');
}

const Rotate90DegreesCcwSharp = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Rotate90DegreesCcwSharp"
      viewBox="0 0 24 24"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Rotate90DegreesCcwSharpHref"
        xlinkHref={`${importPrefix}#Rotate90DegreesCcwSharp`}
      />
    </svg>
  );
};

Rotate90DegreesCcwSharp.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Rotate90DegreesCcwSharp.defaultProps = {
  size: 1.5,
};

export default Rotate90DegreesCcwSharp;
