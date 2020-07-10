/**
 * THIS IS AN AUTO GENERATED SPRITE FILE, CHANGES WILL NOT APPLY
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useOptions, GlobalConfig } from '@snappmarket/config';

if (GlobalConfig.options.importSpriteSVG) {
  // eslint-disable-next-line global-require
  require('./Fa5BrandMailchimp.svg');
}

const Fa5BrandMailchimp = ({ className, size }) => {
  const options = useOptions();

  let importPrefix = options.useSpriteFile ? `/${options.spriteSvgName}` : '';
  if (options.publicPath !== '/') {
    importPrefix = `/${options.publicPath}${importPrefix}`;
  }

  return (
    <svg
      data-testid="Fa5BrandMailchimp"
      viewBox="0 0 448 512"
      className={className}
      style={{
        width: size * 10,
        height: size * 10,
      }}
      fill="currentColor"
    >
      <use
        data-testid="Fa5BrandMailchimpHref"
        xlinkHref={`${importPrefix}#Fa5BrandMailchimp`}
      />
    </svg>
  );
};

Fa5BrandMailchimp.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Fa5BrandMailchimp.defaultProps = {
  size: 1.5,
};

export default Fa5BrandMailchimp;
